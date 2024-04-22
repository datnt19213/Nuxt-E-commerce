import {defineStore} from "pinia";
import {useRoute, useRouter} from "vue-router";
import type {StringType} from "~/types";

interface Product {
  name?: StringType;
  description?: StringType;
  shortDescription?: StringType;
}

export const useSearchStore = defineStore("search", {
  state: () => ({
    isShowingSearch: false,
    searchQuery: "",
  }),
  getters: {
    isSearchActive: (state) => !!state.searchQuery,
  },
  actions: {
    setSearchQuery(search: string) {
      this.searchQuery = search;
      const route = useRoute();
      const router = useRouter();
      router.push({query: {...route.query, search: search || undefined}});
      setTimeout(() => {
        // Call your updateProductList function here
      }, 50);
    },
    clearSearchQuery() {
      this.setSearchQuery("");
    },
    toggleSearch() {
      this.isShowingSearch = !this.isShowingSearch;
    },
    searchProducts(products: Product[]): Product[] {
      const route = useRoute();
      const router = useRouter();
      const name = route.name || "products";
      const search = this.searchQuery.toLowerCase();

      if (route.name === "product-category-slug") {
        const categorySlug = route.params.categorySlug as StringType;
        router.push({
          name,
          params: {categorySlug},
          query: {...route.query, search},
        });
      } else {
        router.push({name: "products", query: {...route.query, search}});
      }

      return search
        ? products.filter((product: Product) => {
            const name = product.name?.toLowerCase();
            const description = product.description?.toLowerCase();
            const shortDescription = product.shortDescription?.toLowerCase();
            const query = search.toLowerCase();
            return (
              name?.includes(query) ||
              description?.includes(query) ||
              shortDescription?.includes(query)
            );
          })
        : products;
    },
  },
});
