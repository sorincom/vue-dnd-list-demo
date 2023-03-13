<template>
  <DemoLayout>
    <template #demo>
      <article :draggable="true" @dragstart="dragstart" class="custom-drag-source">
        Drag Me!
      </article>
      <DnDList :items="items" class="list">
        <template v-slot:item="{ item }">
          <div class="list-item" :style="`background: ${item.color}`">
            {{ item.title }}
          </div>
        </template>
      </DnDList>
    </template>
    <template #source>
      <a target="_blank" href="https://github.com/sorincom/vue-dnd-list-demo/blob/main/src/views/CustomDragSourceView.vue">Source</a>
    </template>
  </DemoLayout>
</template>

<script>

import { DnDList, dndSharedState } from 'vue-dnd-list'
import DemoLayout from '@/components/DemoLayout.vue'

export default {
  name: 'CustomDragSourceView',
  components: { DnDList, DemoLayout },
  data() {
    return {
      items: [
        { id: "id-0", title: "Item A", color: `hsl(${Math.random() * 360},90%,80%)` },
        { id: "id-1", title: "Item B", color: `hsl(${Math.random() * 360},90%,80%)` },
        { id: "id-2", title: "Item C", color: `hsl(${Math.random() * 360},90%,80%)` },
        { id: "id-3", title: "Item D", color: `hsl(${Math.random() * 360},90%,80%)` },
        { id: "id-4", title: "Item E", color: `hsl(${Math.random() * 360},90%,80%)` },
        { id: "id-5", title: "Item F", color: `hsl(${Math.random() * 360},90%,80%)` },
        { id: "id-6", title: "Item G", color: `hsl(${Math.random() * 360},90%,80%)` },
        { id: "id-7", title: "Item H", color: `hsl(${Math.random() * 360},90%,80%)` },
        { id: "id-8", title: "Item I", color: `hsl(${Math.random() * 360},90%,80%)` },
        { id: "id-9", title: "Item J", color: `hsl(${Math.random() * 360},90%,80%)` },
      ],
    }
  },
  methods: {
    dragstart(e) {
      dndSharedState.patch({
        draggedItem: {
          id: 'x',
          title: 'Dragged Item',
          color: 'deepskyblue'
        }
      })
    }
  }
}

</script>

<style scoped lang="scss">

article.custom-drag-source {
  align-self: flex-start;
  padding: 20px;
  border-radius: 6px;
  background: deepskyblue;
  color: white;
  cursor: grab;
}

</style>