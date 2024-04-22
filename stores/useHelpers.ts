import {defineStore} from "pinia";
import type {RouteLocationNormalizedLoaded} from "vue-router";
import pkg from "~/package.json";
import type {
  BooleanType,
  Product,
  WooNuxtSEOItem,
  NullType,
  AnyType,
  StringType,
  UndefinedType,
  VoidType,
  NumberType,
} from "~/types";

export const useHelpersStore = defineStore({
  id: "helpers",
  state: () => ({
    isShowingMobileMenu: ref(false),
    wooNuxtVersionInfo: pkg.version || "0.0.0",
    productsPerPage: ref(24),
    wooNuxtSEO: ref(null) as Ref<WooNuxtSEOItem[] | null>,
    frontEndUrl: ref<string | null>(null),
    isDev: ref(process.env.NODE_ENV === "development"),
    alreadyFailedImages: new Set<string>(),
    $route: null as RouteLocationNormalizedLoaded | null,
  }),
  getters: {
    isQueryEmpty(): BooleanType | NullType {
      return computed(
        () => this.$route && Object.keys(this.$route.query).length === 0
      ).value;
    },
  },
  actions: {
    formatVariationArrays(arr: AnyType[]): AnyType[] {
      return arr.map((a) => ({
        name: a.name.replace(/[-\s]/g, ""),
        value: a.value.replace(/[-\s]/g, ""),
      }));
    },

    arraysEqual(a1: AnyType[], a2: AnyType[]): BooleanType {
      return (
        JSON.stringify(this.formatVariationArrays(a1)) ===
        JSON.stringify(this.formatVariationArrays(a2))
      );
    },

    formatArray(arr: AnyType[]): AnyType[] {
      return arr.map((v) => {
        let name = v.name.toLowerCase();
        name = name.startsWith("pa_") ? name.replace("pa_", "") : name;
        const value = v.value.toLowerCase();
        return {name, value};
      });
    },
    setRoute(route: RouteLocationNormalizedLoaded | NullType): VoidType {
      this.$route = route;
    },
    toggleMobileMenu(state: BooleanType | UndefinedType): VoidType {
      this.isShowingMobileMenu = state ?? !this.isShowingMobileMenu;
    },
    clearAllCookies(): VoidType {
      const cookies = document.cookie.split(";");
      for (const cookie of cookies) {
        const eqPos = cookie.indexOf("=");
        const name = eqPos > -1 ? cookie.substring(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
      }
    },
    replaceQueryParam(
      param: StringType,
      newval: StringType,
      search: StringType
    ): StringType {
      const regex = new RegExp("([?;&])" + param + "[^&;]*[;&]?");
      const query = search.replace(regex, "$1").replace(/&$/, "");
      return (
        (query.length > 2 ? query + "&" : "?") +
        (newval ? param + "=" + newval : "")
      );
    },
    removeBodyClass(className: StringType): VoidType {
      const body = document.querySelector("body");
      body?.classList.remove(className);
    },
    addBodyClass(className: StringType): VoidType {
      const body = document.querySelector("body");
      body?.classList.add(className);
    },
    toggleBodyClass(className: StringType): VoidType {
      const body = document.querySelector("body");
      body?.classList.toggle(className);
    },
    checkForVariationTypeOfAny(product: Product): NumberType[] {
      const numberOfVariation = product?.attributes?.nodes?.length ?? 0;
      let indexOfTypeAny: NumberType[] = [];

      for (let index = 0; index < numberOfVariation; index++) {
        const tempArray: StringType[] = [];
        product.variations?.nodes.forEach((element) => {
          if (element.attributes?.nodes[index]?.value)
            tempArray.push(element.attributes.nodes[index].value);
        });

        if (!tempArray.some(Boolean)) indexOfTypeAny.push(index);
      }

      return indexOfTypeAny;
    },
    formatURI(str: StringType): StringType {
      return decodeURIComponent(str);
    },
    formatDate(date: StringType): StringType {
      return new Date(date).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      });
    },
    formatPrice(price: StringType): StringType {
      return parseFloat(price).toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      });
    },
    scrollToTop(): VoidType {
      window.scrollTo({top: 0, behavior: "smooth"});
    },
    stripHtml(str: StringType | NullType | UndefinedType = ""): StringType {
      return str === null ? "" : str.replace(/(<([^>]+)>)/gi, "");
    },
    debounce(func: Function, delay: NumberType = 100) {
      let inDebounce: NodeJS.Timeout;
      return function (this: AnyType, ...args: AnyType[]) {
        clearTimeout(inDebounce);
        inDebounce = setTimeout(() => func.apply(this, args), delay);
      };
    },
    imageFallback(event: Event): VoidType {
      const {target} = event;

      if (target instanceof HTMLImageElement) {
        if (this.alreadyFailedImages.has(target.src)) return;
        this.alreadyFailedImages.add(target.src);
        const lastURL = decodeURIComponent(target.src).split("http").pop();
        const fallbackSrc = lastURL
          ? `http${lastURL}`
          : "/images/placeholder.jpg";
        target.src = fallbackSrc;
        target.srcset = "";
      }
    },
  },
});
