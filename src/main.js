import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from "./store/index";
import "nprogress/nprogress.css";
import { VueQueryPlugin } from "@tanstack/vue-query";

createApp(App).use(VueQueryPlugin).use(store).use(router).mount("#app");
