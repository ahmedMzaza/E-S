import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/layout/Home/HomeView.vue'
import HomeView2 from '../views/layout/Home/HomeViewtwo.vue'
import HomeView3 from '../views/layout/Home/HomeView3.vue'
import HomeView4 from '../views/layout/Home/HomeView4.vue'
import Loge from '../views/Loge.vue'
import Promotions from '../views/Promotions.vue'
import Prodect from '../views/Prodect.vue'
import Checkout from '../views/Checkout.vue'
import vue from '../views/vue.vue'
import vunse from '../views/navtest.vue'
import Like from '../views/Like.vue'
import dashboard from '../views/dashboard.vue'
import Landing from '../views/landing.vue'



const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/home3',
    name: 'home3',
    component: HomeView3
  },
  {
    path: '/home2',
    name: 'home2',
    component: HomeView2
  },
  {
    path: '/home4',
    name: 'home4',
    component: HomeView4
  },
  {
    path: '/Like',
    name: 'Like',
    component: Like,

  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: dashboard,

  },
  {
    path: '/Landing',
    name: 'Landing',
    component: Landing,

  },

  {
    path: '/vueTest:id',
    name: 'vueTest',
    component: vunse,
    props: true
  },
  {
    path: '/vue',
    name: 'vue',
    component: vue
  },
  {
    path: '/Loge',
    name: 'Loge',
    component: Loge
  },
  {
    path: '/Promotions',
    name: 'Promotions',
    component: Promotions,
  },
  {
    path: '/Prodect:id',
    name: 'Prodect',
    component: Prodect,
    props: true
  },
  {
    path: '/Checkout',
    name: 'Checkout',
    component: Checkout
  },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
