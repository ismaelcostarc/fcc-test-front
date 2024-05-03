import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/customer/list',
      name: 'customerList',
      component: () => import('../views/customer/CustomerListView.vue')
    },
    {
      path: '/customer/:id',
      name: 'customer',
      component: () => import('../views/customer/CustomerView.vue')
    }
  ]
})

export default router
