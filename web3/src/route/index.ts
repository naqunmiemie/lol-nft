import { createRouter, createWebHashHistory } from "vue-router";
import OwnerVue from "../views/Owner.vue";
import Layout from "../layout/index.vue"

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", component: Layout },
    { path: "/owner", component: OwnerVue },
  ],
});


export default router;