import { JsonRpcSigner, Web3Provider } from "@ethersproject/providers";
import { defineStore } from "pinia";
export const APP_STORE = "app";

export const useStore = defineStore(APP_STORE, {
  state: () => {
    return {
      drawer: false,
      account: "" as string,
      LuuTokenBalance: 0,
      ethBalance: 0,
      usdtBalance: 0,
    };
  },
});

export const LuuTokenAddress = "0x756C577C1489EE3390FF010028FFd9c57329ce20";
export const provider: Web3Provider | null = null;
export const signer: JsonRpcSigner | null = null;
