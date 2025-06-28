import { createWebHistory, createRouter } from "vue-router";

import Home from "../views/HomePage.vue";
import Auth from "../views/Auth.vue";

const routes = [
  {
    path: "/",
    component: Home,
    name: "home",
  },
  {
    path: "/auth",
    component: Auth,
    name: "auth",
  },
  {
    path: "/about",
    component: () => import("../views/AboutPage.vue"),
    name: "about",
  },
  {
    path: "/user-profile",
    component: () => import("../views/UserProfile.vue"),
    name: "user-profile",
  },
  {
    name: "cart",
    component: () => import("../views/CartPage.vue"),
    path: "/cart",
  },
  {
    path: "/contact",
    component: () => import("../views/ContactPage.vue"),
    name: "contact",
  },
  {
    path: "/productsDetail/:id",
    component: () => import("../views/ProductDetail.vue"),
    name: "product-detail",
  },
  {
    path: "/:catchAll(.*)",
    component: () => import("../views/NotFound.vue"),
    name: "not-found",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
