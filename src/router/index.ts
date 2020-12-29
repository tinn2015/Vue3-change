import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/exercises',
    name: 'exercises',
    component: () => import('../views/js/exercises.vue')
  },
  {
    path: '/callApplyBind',
    name: 'callApplyBind',
    component: () => import('../views/js/callApplyBind.vue')
  },
  {
    path: '/vue-router',
    name: 'vueRouter',
    component: () => import('../views/vue/vue-router.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
