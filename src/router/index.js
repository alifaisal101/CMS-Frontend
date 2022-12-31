import { createRouter, createWebHistory } from "vue-router";
import Login from "./../views/Login.vue";

import MainApp from "./..//views/MainApp.vue";
import MainApp_childRoutes from "./MainApp.routes.db";

import store from "./../store/index";

const routes = [
  {
    path: "/login",
    name: "login",
    component: Login,
    meta: {
      requiresLoggedIn: false
    }
  },
  {
    path: "/app",
    name: "test",
    component: MainApp,
    children: MainApp_childRoutes,
    meta: {
      requiresLoggedIn: true
    }
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(function (to, _, next) {
  const isLoggedIn = store.getters.isLoggedin;
  if (to.meta.requiresLoggedIn && !isLoggedIn){
    return next('/login');
  } else if (!to.meta.requiresLoggedIn && isLoggedIn) {
    return next('/app');
  } else {
    return next();
  }
});

export default router;
