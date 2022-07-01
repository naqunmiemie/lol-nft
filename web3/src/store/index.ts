import { JsonRpcSigner, Web3Provider } from "@ethersproject/providers";
import { defineStore } from "pinia";
import { decimals18todecimals4 } from "../utils/math";
export const APP_STORE = "app";

export const useStore = defineStore(APP_STORE, {
  state: () => ({
    drawer: false,
    account: "",
    luuTokenBalance: "",
    ethBalance: "",
    usdtBalance: "",
    provider: null as Web3Provider | null,
    signer: null as JsonRpcSigner | null,
    buyLtkByEthDialog: false,
    buyLtkByUsdtDialog: false,
    //owner
    ownerEthBalance: "",
    ownerUsdtBalance: "",
  }),
  getters: {
    luuTokenBalanceStr: (state) => decimals18todecimals4(state.luuTokenBalance),
    ethBalanceStr: (state) => decimals18todecimals4(state.ethBalance),
    usdtBalanceStr: (state) => decimals18todecimals4(state.usdtBalance),
    ownerEthBalanceStr: (state) => decimals18todecimals4(state.ownerEthBalance),
    ownerUsdtBalanceStr: (state) => decimals18todecimals4(state.ownerUsdtBalance),
  },
});
