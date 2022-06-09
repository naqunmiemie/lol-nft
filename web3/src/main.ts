import { createApp } from "vue";
import { useRouter } from "vue-router";
import App from "./App.vue";
import router from "./route";

const app = createApp(App);
app.use(router);
app.mount('#app');
