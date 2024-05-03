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
      path: '/customers/list',
      name: 'customersList',
      component: () => import('../views/customers/CustomersListView.vue')
    }
  ]
})

export default router
