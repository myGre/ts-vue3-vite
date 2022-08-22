import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import("../view/home.vue")
  },
  {
    path: '/login',
    name: 'login',
    component: () => import("../view/login/index.vue")
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router