import Vue from 'vue'
import Router from 'vue-router'
import Overview from '@/components/Overview'
import Products from '@/components/Products'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Overview',
      component: Overview
    },
    {
      path: '/products',
      name: 'Products',
      component: Products
    }
  ]
})
