<template>
  <DemoLayout>
    <template #demo>
      <article v-dragsource="customItem" class="custom-drag-source">
        Drag Me!
      </article>
      <DnDList :items="items" class="list horizontal" :animation="customAnimation">
        <template v-slot:item="{ item }">
          <div class="list-item" :style="`background: ${item.color}`">
            {{ item.title }}
          </div>
        </template>
      </DnDList>
    </template>
    <template #description>
      Horizontal list with custom animation.
    </template>
    <template #source>
      <span><a target="_blank" href="https://github.com/sorincom/vue-dnd-list-demo/blob/main/src/views/HorizontalView.vue">Source</a></span>
      <span>Global CSS is defined in <a target="_blank" href="https://github.com/sorincom/vue-dnd-list-demo/blob/main/src/App.vue">App.vue</a></span>
    </template>
  </DemoLayout>
</template>

<script>

import gsap from 'gsap'
import { DnDList, dragsource } from 'vue-dnd-list'
import DemoLayout from '@/components/DemoLayout.vue'

export default {
  name: 'CustomDragSourceView',
  components: { DnDList, DemoLayout },
  directives: { dragsource },
  data() {
    return {
      items: [
        { id: "id-0", title: "Item A", color: `hsl(  0,90%,80%)` },
        { id: "id-1", title: "Item B", color: `hsl( 36,90%,80%)` },
        { id: "id-2", title: "Item C", color: `hsl( 72,90%,80%)` },
        { id: "id-3", title: "Item D", color: `hsl(108,90%,80%)` },
        { id: "id-4", title: "Item E", color: `hsl(144,90%,80%)` },
        { id: "id-5", title: "Item F", color: `hsl(180,90%,80%)` },
        { id: "id-6", title: "Item G", color: `hsl(216,90%,80%)` },
        { id: "id-7", title: "Item H", color: `hsl(252,90%,80%)` },
        { id: "id-8", title: "Item I", color: `hsl(288,90%,80%)` },
        { id: "id-9", title: "Item J", color: `hsl(324,90%,80%)` },
      ],
      customItem: {
        source: 'blue-circle',
        data: {
          id: 'x',
          title: 'Dragged Item',
          color: 'dodgerblue'
        }
      }
    }
  },
  computed: {
    customAnimation() {
      // Uses greensock animation library
      // https://greensock.com/docs/v3/GSAP/gsap.fromTo()
      return {
        onEnter(el, { onComplete }) {
          gsap.fromTo(el, 
          {
            opacity: 0,
            y: '+=40',
            scale: 0.1
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.25,
            ease: 'back(1.1)',
            onComplete,
          })
        },
        onLeave(el, { onComplete }) {
          gsap.fromTo(el, 
          {
            height: el.offsetHeight
          },
          {
            scale: 0.1,
            height: el.offsetHeight,
            width: 0,
            duration: .2,
            ease: 'linear',
            onComplete,
          })
        },
      }
    },
  }
}

</script>
