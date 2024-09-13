import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about-licenses',
    name: 'about-licenses',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutLicenses.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
