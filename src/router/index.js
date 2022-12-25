import { createRouter, createWebHistory } from 'vue-router'
import Login from "./../views/Login.vue"

import MainApp from "./..//views/MainApp.vue";
import MainApp_childRoutes from "./MainApp.routes.db";

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login,

  },
  {
    path: '/app',
    name: 'test',
    component:MainApp,
    children:MainApp_childRoutes
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
