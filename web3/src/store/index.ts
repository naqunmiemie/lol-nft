import { defineStore } from "pinia";

export const APP_STORE = "app";

export const useStore = defineStore(APP_STORE, {
  state: () => {
    return {
        drawer: false,
    };
  },
});