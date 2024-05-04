import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
      meta: {
        layout: 'Login'
      }
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
    },
    {
      path: '/customer/create',
      name: 'customerCreate',
      component: () => import('../views/customer/CustomerCreateView.vue')
    },
    {
      path: '/:pathMatch(.*)',
      component: () => import('../views/PageNotFoundView.vue')
    }
  ]
})

export default router
