import { defineStore } from "pinia";
import { JsonRpcSigner, Web3Provider } from '@ethersproject/providers';
export const APP_STORE = "app";

export const useStore = defineStore(APP_STORE, {
  state: () => {
    return {
      drawer: false,
      provider: null as null|Web3Provider,
      account: "" as string,
      signer: null as null|JsonRpcSigner,
    };
  },
});
