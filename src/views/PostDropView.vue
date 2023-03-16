<template>
  <DemoLayout>
    <template #demo>
      <article :draggable="true" @dragstart="dragstart" class="custom-drag-source">
        Drag Me!
      </article>
      <DnDList listId="source-list" :items="sourceItems" :accept="false" :copy="true" class="list">
        <template v-slot:item="{ item }">
          <div class="list-item" :style="`background: ${item.color}`">
            id: {{ item.id }} | {{ item.title }}
          </div>
        </template>
      </DnDList>
      <DnDList listId="this-list" :items="items" class="list" :postDrop="postDrop">
        <template #item="{ item }">
          <div class="list-item" :style="`background: ${item.color}`">
            id: {{ item.id }} | {{ item.title }}
          </div>
        </template>
      </DnDList>
    </template>
    <template #description>
      Explicitely using shared DnD state to pass data from an external source to a list.
    </template>
    <template #source>
      <a target="_blank" href="https://github.com/sorincom/vue-dnd-list-demo/blob/main/src/views/PostDropView.vue">Source</a>
    </template>
  </DemoLayout>
</template>

<script>

import { DnDList, dnd } from 'vue-dnd-list'
import DemoLayout from '@/components/DemoLayout.vue'

export default {
  name: 'PostDropView',
  components: { DnDList, DemoLayout },
  data() {
    return {
      sourceItems: [
        { id: "a0", title: "Item A-0", color: `hsl(330,90%,90%)` },
        { id: "a1", title: "Item A-1", color: `hsl(330,90%,88%)` },
        { id: "a2", title: "Item A-2", color: `hsl(330,90%,86%)` },
        { id: "a3", title: "Item A-3", color: `hsl(330,90%,84%)` },
        { id: "a4", title: "Item A-4", color: `hsl(330,90%,82%)` },
        { id: "a5", title: "Item A-5", color: `hsl(330,90%,80%)` },
        { id: "a6", title: "Item A-6", color: `hsl(330,90%,78%)` },
        { id: "a7", title: "Item A-7", color: `hsl(330,90%,76%)` },
        { id: "a8", title: "Item A-8", color: `hsl(330,90%,74%)` },
        { id: "a9", title: "Item A-9", color: `hsl(330,90%,72%)` },
      ],
      items: [
        { id: "b0", title: "Item B-0", color: `hsl(200,90%,90%)` },
        { id: "b1", title: "Item B-1", color: `hsl(200,90%,88%)` },
        { id: "b2", title: "Item B-2", color: `hsl(200,90%,86%)` },
        { id: "b3", title: "Item B-3", color: `hsl(200,90%,84%)` },
        { id: "b4", title: "Item B-4", color: `hsl(200,90%,82%)` },
        { id: "b5", title: "Item B-5", color: `hsl(200,90%,80%)` },
        { id: "b6", title: "Item B-6", color: `hsl(200,90%,78%)` },
        { id: "b7", title: "Item B-7", color: `hsl(200,90%,76%)` },
        { id: "b8", title: "Item B-8", color: `hsl(200,90%,74%)` },
        { id: "b9", title: "Item B-9", color: `hsl(200,90%,72%)` },
      ],
    }
  },
  methods: {
    dragstart() {
      dnd.start('blue-circle', {
        id: 'x',
        title: 'Dragged Item',
        color: 'dodgerblue'
      })
    },
    postDrop(item) {
      if(dnd.source.value === 'this-list') return
      
      const otherIds = this.items
        .map(i => i.id)
        .filter(id => id != item.id)
        .map(id => parseInt(id.substring(1)))
      const maxId = Math.max(...otherIds) + 1
      item.title = item.title + ' (dropped)'
      item.id = `b${maxId}`
    }
  }
}

</script>
