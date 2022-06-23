import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./route";

const app = createApp(App);
app.use(router);
app.use(createPinia());
app.use(ElementPlus);

app.mount("#app");

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

