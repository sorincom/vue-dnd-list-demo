import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'simple',
      component: () => import('../views/SimpleView.vue')
    },
    {
      path: '/two-lists',
      name: 'two-lists',
      component: () => import('../views/TwoListsView.vue')
    }
  ]
})

export default router
