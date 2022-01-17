import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import All from "../views/All.vue";
import Quote from "../views/Quote.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/all",
    name: "All",
    component: All
  },
  {
    path: "/quote/:id",
    name: "Quote",
    component: Quote
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
