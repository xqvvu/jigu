import ui from "@nuxt/ui/vue-plugin";
import { createApp } from "vue";
import App from "@/app.vue";
import head from "@/plugins/head";
import i18n from "@/plugins/i18n";
import router from "@/router";
import pinia from "@/stores";

import "@/assets/css/main.css";

const app = createApp(App);

app
  .use(i18n)
  .use(head)
  .use(pinia)
  .use(router)
  .use(ui)
  .mount("#app");
