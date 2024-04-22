import {defineStore} from "pinia";
import type {ComponentType, NumberType, StringType} from "~/types/old.index";

export const useProductDetailStore = defineStore("productDetail", {
  state: () => ({
    isTab: 0,
    isReview: false,
    selectedIndex: 0,
    hoverIndex: 0,
  }),
  actions: {
    tabToDescription() {
      this.isTab = 0;
      //   console.log(this.isTab);
    },
    tabToReview() {
      this.isTab = 1;
      //   console.log(this.isTab);
    },
    showFormReview() {
      this.isReview = true;
      //   console.log(this.isTab);
    },
    hideFormReview() {
      this.isReview = false;
      //   console.log(this.isTab);
    },
    highlightStars(index: NumberType) {
      this.hoverIndex = index + 1;
      // console.log(index + 1);
    },

    resetStars() {
      this.hoverIndex = 0;
    },

    selectStars(index: NumberType) {
      this.selectedIndex = index + 1;
      // console.log(index + 1);
    },
  },
});
