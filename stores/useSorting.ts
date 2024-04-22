import {useRoute, useRouter} from "vue-router";
import {defineStore} from "pinia";
import {useProductsStore} from "./useProduct";
import type {BooleanType, NumberType, Product, StringType} from "~/types";

export const useSortingStore = defineStore("sorting", {
  state: () => ({
    isShow: false,
    sortName: "",
    sortValue: 0,
    orderQuery: "",
  }),
  actions: {
    toggleSort() {
      this.isShow = !this.isShow;
      // console.log(this.isShow);
    },
    setSort(sortValue: NumberType, sortName: StringType) {
      this.sortName = sortName;
      this.sortValue = sortValue;
      // console.log(this.sortName);
      // console.log(this.sortValue);
    },
    getOrderQuery() {
      const route = useRoute();
      return {
        orderBy: route.query.orderby as string,
        order: route.query.order as string,
      };
    },
    setOrderQuery(orderby: string, order?: string) {
      const router = useRouter();
      const route = useRoute();
      router.push({
        query: {
          ...route.query,
          orderby: orderby ?? undefined,
          order: order ?? undefined,
        },
      });
      setTimeout(() => {
        useProductsStore().updateProductList();
      }, 100);
    },
    isSortingActive() {
      return this.orderQuery !== "";
    },
    sortProducts(products: Product[]) {
      if (!this.isSortingActive) return products;

      const orderQuery = this.getOrderQuery();

      if (!orderQuery.orderBy && !orderQuery.order) return products;

      const orderby: string = orderQuery.orderBy || "date";
      const order: string = orderQuery.order || "DESC";

      return products.sort((a: Product, b: Product) => {
        // Format values for sorting
        const aDate: any = a.date ? new Date(a.date).getTime() : 0;
        const bDate: any = b.date ? new Date(b.date).getTime() : 0;
        const aPrice = a.rawPrice
          ? parseFloat(
              [...a.rawPrice.split(",")].reduce((a, b) =>
                String(Math.max(Number(a), Number(b)))
              )
            )
          : 0;
        const bPrice = b.rawPrice
          ? parseFloat(
              [...b.rawPrice.split(",")].reduce((a, b) =>
                String(Math.max(Number(a), Number(b)))
              )
            )
          : 0;
        const aSalePrice: number = a.rawSalePrice
          ? parseFloat(
              [...a.rawSalePrice.split(",")].reduce((a, b) =>
                String(Math.max(Number(a), Number(b)))
              )
            )
          : 0;
        const aRegularPrice: number = a.rawRegularPrice
          ? parseFloat(
              [...a.rawRegularPrice.split(",")].reduce((a, b) =>
                String(Math.max(Number(a), Number(b)))
              )
            )
          : 0;
        const bSalePrice: number = b.rawSalePrice
          ? parseFloat(
              [...b.rawSalePrice.split(",")].reduce((a, b) =>
                String(Math.max(Number(a), Number(b)))
              )
            )
          : 0;
        const bRegularPrice: number = b.rawRegularPrice
          ? parseFloat(
              [...b.rawRegularPrice.split(",")].reduce((a, b) =>
                String(Math.max(Number(a), Number(b)))
              )
            )
          : 0;
        const aDiscount: number = a.onSale
          ? Math.round(((aSalePrice - aRegularPrice) / aRegularPrice) * 100)
          : 0;
        const bDiscount: number = b.onSale
          ? Math.round(((bSalePrice - bRegularPrice) / bRegularPrice) * 100)
          : 0;
        const aName: string = a.name || "";
        const bName: string = b.name || "";
        const aRating: number = a.averageRating || 0;
        const bRating: number = b.averageRating || 0;

        switch (orderby) {
          case "price":
            return order !== "DESC" ? aPrice - bPrice : bPrice - aPrice;
          case "rating":
            return order !== "DESC" ? bRating - aRating : aRating - bRating;
          case "discount":
            return order !== "DESC"
              ? bDiscount - aDiscount
              : aDiscount - bDiscount;
          case "alphabetically":
            return order !== "DESC"
              ? aName.localeCompare(bName)
              : bName.localeCompare(aName);
          default:
            return order !== "DESC" ? aDate - bDate : bDate - aDate;
        }
      });
    },
  },
});
