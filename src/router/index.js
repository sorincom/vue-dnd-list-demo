import { createRouter, createWebHistory } from 'vue-router'
import SimpleView from '../views/SimpleView.vue'
import TwoListsView from '../views/TwoListsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'simple',
      component: SimpleView
    },
    {
      path: '/two-lists',
      name: 'two-lists',
      component: TwoListsView
    }
  ]
})

export default router
