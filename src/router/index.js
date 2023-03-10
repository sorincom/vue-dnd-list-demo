import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import SimpleView from '../views/SimpleView.vue'
import TwoListsView from '../views/TwoListsView.vue'
import CustomDragSourceView from '../views/CustomDragSourceView.vue'
import CustomAcceptView from '../views/CustomAcceptView.vue'

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(),
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
    },
    {
      path: '/custom-drag-source',
      name: 'custom-drag-source',
      component: CustomDragSourceView
    },
    {
      path: '/custom-accept',
      name: 'custom-accept',
      component: CustomAcceptView
    }
  ]
})

export default router
