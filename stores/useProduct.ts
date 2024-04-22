import {defineStore} from "pinia";
import type {AnyType, NullType, Product} from "~/types";
import {useHelpersStore} from "./useHelpers";
import {useSortingStore} from "./useSorting";
import {useFilterStore} from "./useFiltering";
import {useSearchStore} from "./useSearch";

export const useProductsStore = defineStore({
  id: "products",
  state: () => ({
    products: [] as Product[],
    allProducts: [] as Product[],
  }),
  actions: {
    setProducts(newProducts: Product[]) {
      if (!Array.isArray(newProducts)) {
        console.log("Product: ", newProducts);
        throw new Error("Products must be an array.");
      }
      this.products = newProducts ?? [];
      this.allProducts = JSON.parse(JSON.stringify(newProducts));
    },
    async updateProductList() {
      const {scrollToTop} = useHelpersStore();
      const {isSortingActive, sortProducts} = useSortingStore();
      const {isFiltersActive, filterProducts} = useFilterStore();
      const {isSearchActive, searchProducts} = useSearchStore();

      // scroll to top of page
      scrollToTop();

      // return all products if no filters are active
      if (!isFiltersActive && !isSearchActive && !isSortingActive) {
        this.products = this.allProducts;
        return;
      }

      // otherwise, apply filter, search and sorting in that order
      try {
        let newProducts = [...this.allProducts];
        if (isFiltersActive) newProducts = filterProducts(newProducts);
        if (isSearchActive)
          newProducts = searchProducts(newProducts) as Product[];
        if (isSortingActive()) newProducts = sortProducts(newProducts);

        this.products = newProducts;
      } catch (error) {
        console.error(error);
      }
    },
  },
});
