<template>
  <DemoLayout>
    <template #demo>
      <DnDList :items="items" class="list">
        <template v-slot:item="{ item, index }">
          <div class="list-item" :style="`background: ${item.color};`">
            <span>{{ item.title }}</span>
            <button :style="buttonStyle" @click="onClick(item, index)">Click</button>
          </div>
        </template>
      </DnDList>
    </template>
    <template #source>
      <a target="_blank" href="https://github.com/sorincom/vue-dnd-list-demo/blob/main/src/views/PointerEventsView.vue">Source</a>
    </template>
    <template #setup>
      <section>
        <h4>&nbsp;</h4>
        <article><input id="pe" type="checkbox" v-model="usePointerEvents" /><label for="pe">Use Pointer Events</label></article>
      </section>
    </template>
  </DemoLayout>
</template>

<script>

import { DnDList } from 'vue-dnd-list'
import DemoLayout from '@/components/DemoLayout.vue'

export default {
  name: 'PointerEventsView',
  components: { DnDList, DemoLayout },
  data() {
    return {
      usePointerEvents: false,
      items: [
        { id: "id-0", title: "Item 0", color: `hsl(330,90%,90%)` },
        { id: "id-1", title: "Item 1", color: `hsl(330,90%,88%)` },
        { id: "id-2", title: "Item 2", color: `hsl(330,90%,86%)` },
        { id: "id-3", title: "Item 3", color: `hsl(330,90%,84%)` },
        { id: "id-4", title: "Item 4", color: `hsl(330,90%,82%)` },
        { id: "id-5", title: "Item 5", color: `hsl(330,90%,80%)` },
        { id: "id-6", title: "Item 6", color: `hsl(330,90%,78%)` },
        { id: "id-7", title: "Item 7", color: `hsl(330,90%,76%)` },
        { id: "id-8", title: "Item 8", color: `hsl(330,90%,74%)` },
        { id: "id-9", title: "Item 9", color: `hsl(330,90%,72%)` },
      ],
    }
  },
  computed: {
    buttonStyle() {
      return {
        'pointer-events': this.usePointerEvents ? 'all' : 'none',
      }
    },
  },
  methods: {
    onClick(item, index) {
      alert(`Clicked ${item.title} at index ${index}`)
    },
  },
}

</script>
