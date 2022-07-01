import { createRouter, createWebHashHistory } from "vue-router";
import Layout from "../layout/index.vue";
import ContractOwner from "../layout/main/contractOwner/ContractOwner.vue";
import LuckyDraw from "../layout/main/luckyDraw/LuckyDraw.vue";
import TransactionCenter from "../layout/main/transactionCenter/TransactionCenter.vue";
import YourChampions from "../layout/main/yourChampions/YourChampions.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: Layout,
      children: [
        { path: "/lucky-draw", component: LuckyDraw },
        { path: "/transaction-center", component: TransactionCenter },
        { path: "/your-champions", component: YourChampions },
        { path: "/contract-owner", component: ContractOwner },
      ],
    },
  ],
});

export default router;
