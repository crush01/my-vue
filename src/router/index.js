import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home')
  },
  {
    path: '/sass-use',
    name: 'sassUse',
    component: () => import('@/views/sass-use')
  },
  {
    path: '/eslint-use',
    name: 'eslintUse',
    component: () => import('@/views/eslintPage')
  },
  {
    path: '/flexible-use',
    name: 'flexibleUse',
    component: () => import('@/views/flexible-use')
  },
  {
    path: '/sku-use',
    name: 'sku',
    component: () => import('@/views/sku-use')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

export default router
