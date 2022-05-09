import { createRouter, createWebHistory } from "vue-router";

import HomePage from "../components/Home.vue";
import ProductsPage from "../components/Products.vue";
import AboutPage from "../components/About.vue";
import ErrorPage from "../components/Error.vue";

const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/products",
    component: ProductsPage,
  },
  {
    path: "/about",
    component: AboutPage,
  },
  {
    path: "/:pathMatch(.*)*",
    component: ErrorPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
