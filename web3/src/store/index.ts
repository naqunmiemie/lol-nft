import { JsonRpcSigner, Web3Provider } from "@ethersproject/providers";
import { defineStore } from "pinia";
export const APP_STORE = "app";

export const useStore = defineStore(APP_STORE, {
  state: () => {
    return {
      drawer: false,
      account: "",
      luuTokenBalance: "",
      ethBalance: "",
      usdtBalance: "",
      provider: null as Web3Provider | null,
      signer:null as JsonRpcSigner | null,
    };
  },
});

export const LuuTokenAddress = "0x756C577C1489EE3390FF010028FFd9c57329ce20";
