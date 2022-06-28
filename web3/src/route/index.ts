import { createRouter, createWebHashHistory } from "vue-router";
import Layout from "../layout/index.vue"

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", component: Layout },
  ],
});


export default router;