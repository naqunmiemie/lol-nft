import { createRouter, createWebHashHistory } from "vue-router";
import UserVue from "../views/User.vue";
import OwnerVue from "../views/Owner.vue";

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/user", component: UserVue },
    { path: "/owner", component: OwnerVue },
  ],
});


export default router;