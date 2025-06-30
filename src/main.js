import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from "./store/index";
import "nprogress/nprogress.css";
import { VueQueryPlugin } from "@tanstack/vue-query";
import ToastPlugin from "vue-toast-notification";
import "vue-toast-notification/dist/theme-default.css";

createApp(App)
  .use(VueQueryPlugin)
  .use(store)
  .use(ToastPlugin)
  .use(router)
  .mount("#app");
