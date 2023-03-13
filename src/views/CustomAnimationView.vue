<template>
  <DemoLayout>
    <template #demo>
      <DnDList :items="items" class="list" :animation="customAnimation">
        <template v-slot:item="{ item }">
          <div class="list-item" :style="`background: ${item.color}`">
            {{ item.title }}
          </div>
        </template>
      </DnDList>
    </template>
    <template #source>
      <a target="_blank" href="https://github.com/sorincom/vue-dnd-list-demo/blob/main/src/views/CustomAnimationView.vue">Source</a>
    </template>
  </DemoLayout>
</template>

<script>

import gsap from 'gsap'
import { DnDList } from 'vue-dnd-list'
import DemoLayout from '@/components/DemoLayout.vue'

export default {
  name: 'CustomAnimationView',
  components: { DnDList, DemoLayout },
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
    }
  },
  methods: {
    customAnimation(el) {
      // Uses greensock animation library
      // https://greensock.com/docs/v3/GSAP/gsap.fromTo()
      gsap.fromTo(el, 
      {
        x: '+=40',
      },
      {
        x: 0,
        duration: 0.25,
        ease: 'back'
      })
    },
  }
}

</script>