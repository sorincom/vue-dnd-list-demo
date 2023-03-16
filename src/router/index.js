import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import SimpleView from '@/views/SimpleView.vue'
import DragHandleView from '@/views/DragHandleView.vue'
import TwoListsView from '@/views/TwoListsView.vue'
import CustomDragSourceView from '@/views/CustomDragSourceView.vue'
import CustomAcceptView from '@/views/CustomAcceptView.vue'
import CustomAnimationView from '@/views/CustomAnimationView.vue'
import HorizontalView from '@/views/HorizontalView.vue'
import GridView from '@/views/GridView.vue'
import PostDropView from '@/views/PostDropView.vue'

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
      path: '/drag-handle',
      name: 'drag-handle',
      component: DragHandleView
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
    },
    {
      path: '/custom-animation',
      name: 'custom-animation',
      component: CustomAnimationView
    },
    {
      path: '/horizontal',
      name: 'horizontal',
      component: HorizontalView
    },
    {
      path: '/grid',
      name: 'grid',
      component: GridView
    },
    {
      path: '/post-drop',
      name: 'post-drop',
      component: PostDropView
    }
  ]
})

export default router
