// store/useFilterStore.ts
import {defineStore} from "pinia";
import {useRoute, useRouter} from "vue-router";
import {useRuntimeConfig} from "#imports";
import {useProductsStore} from "../stores/useProduct";
import type {AnyType, Product} from "~/types";

interface FilterState {
  filterQuery: string;
  isShow: boolean;
}

export const useFilterStore = defineStore("filter", {
  state: (): FilterState => ({
    filterQuery: "",
    isShow: false,
  }),

  actions: {
    openFilter() {
      this.isShow = true;
    },
    closeFilter() {
      this.isShow = false;
    },
    getFilter(filterName: string): string[] {
      return (
        this.filterQuery
          .split(`${filterName}[`)[1]
          ?.split("]")[0]
          ?.split(",") || []
      );
    },

    setFilter(filterName: string, filterValue: string[]) {
      let newFilterQuery = this.filterQuery || "";
      const route = useRoute();
      const router = useRouter();

      if (!this.filterQuery?.includes(filterName)) {
        newFilterQuery = this.filterQuery
          ? `${this.filterQuery},${filterName}[${filterValue}]`
          : `${filterName}[${filterValue}]`;
      } else {
        newFilterQuery = !filterValue.length
          ? this.filterQuery.replace(
              `${filterName}[${this.getFilter(filterName)}]`,
              ""
            )
          : this.filterQuery.replace(
              `${filterName}[${this.getFilter(filterName)}]`,
              `${filterName}[${filterValue}]`
            );
      }

      newFilterQuery = newFilterQuery
        .replace(/^,|,$/g, "")
        .replace(/,{2,}/g, ",");
      this.filterQuery = newFilterQuery;

      router.push({
        path: route.path,
        query: {...route.query, filter: newFilterQuery || undefined},
      });

      setTimeout(() => {
        useProductsStore().updateProductList();
      }, 50);
    },

    resetFilter() {
      const {scrollToTop} = useHelpersStore();
      const router = useRouter();
      const route = useRoute();

      this.filterQuery = "";
      router.push({query: {...route.query, filter: undefined}});

      setTimeout(() => {
        useProductsStore().updateProductList();
        scrollToTop();
      }, 50);
    },

    filterProducts(products: Product[]): Product[] {
      const runtimeConfig = useRuntimeConfig();

      return products.filter((product: Product) => {
        // Category filter
        const category = this.getFilter("category") || [];
        const categoryCondition = category.length
          ? product.productCategories?.nodes?.some((node: any) =>
              category.includes(node.slug)
            )
          : true;

        // Price filter
        const priceRange = this.getFilter("price") || [];
        const productPrice = product.rawPrice
          ? parseFloat(
              [...product.rawPrice.split(",")].reduce((a, b) =>
                String(Math.max(Number(a), Number(b)))
              )
            )
          : 0;
        const priceCondition = priceRange.length
          ? productPrice >= parseFloat(priceRange[0]) &&
            productPrice <= parseFloat(priceRange[1])
          : true;

        // Star rating filter
        const starRating = this.getFilter("rating") || [];
        const ratingCondition = starRating.length
          ? (product.averageRating ?? 0) >= parseFloat(starRating[0])
          : true;

        // Product attribute filters
        const globalProductAttributes =
          runtimeConfig?.public?.GLOBAL_PRODUCT_ATTRIBUTES instanceof Array
            ? runtimeConfig.public.GLOBAL_PRODUCT_ATTRIBUTES.map(
                (attribute: AnyType) => attribute.slug
              )
            : [];

        const attributeCondition = globalProductAttributes.every(
          (attribute: string) => {
            const attributeValues = this.getFilter(attribute) || [];
            if (!attributeValues.length) return true;
            return product.terms?.nodes?.some(
              (node: any) =>
                node.taxonomyName === attribute &&
                attributeValues.includes(node.slug)
            );
          }
        );

        const onSale = this.getFilter("sale") || [];
        const saleItemsOnlyCondition = onSale.length ? product.onSale : true;

        return (
          ratingCondition &&
          priceCondition &&
          attributeCondition &&
          categoryCondition &&
          saleItemsOnlyCondition
        );
      });
    },
  },

  getters: {
    isFiltersActive(): boolean {
      return !!this.filterQuery;
    },
  },
});
