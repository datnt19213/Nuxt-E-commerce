import {defineStore} from "pinia";
import type {ComponentType, StringType} from "~/types/old.index";

export const useProfileStore = defineStore("profile", {
  state: () => ({
    isShow: false,
  }),
  actions: {
    openProfileMenu() {
      this.isShow = true;
    },
    closeProfileMenu() {
      this.isShow = false;
    },
  },
});
