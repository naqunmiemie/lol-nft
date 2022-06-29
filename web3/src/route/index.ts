import { createRouter, createWebHashHistory } from "vue-router";
import Layout from "../layout/index.vue";
import Owner from "../layout/main/owner/Owner.vue";


const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: Layout,
      children: [{ path: "/owner", component: Owner }],
    },
  ],
});

export default router;
