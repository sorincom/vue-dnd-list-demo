<template>
  <DemoLayout>
    <template #demo>
      <DnDList :items="items" class="list" :useHandle="true">
        <template v-slot:item="{ item }">
          <div class="list-item" :style="`background: ${item.color}`">
            <span>{{ item.title }}</span>
            <span class="drag-handle" :draggable="true" />
          </div>
        </template>
      </DnDList>
    </template>
    <template #description>
      List items can be dragged only by their right handle.
    </template>
    <template #source>
      <span><a target="_blank" href="https://github.com/sorincom/vue-dnd-list-demo/blob/main/src/views/DragHandleView.vue">Source</a></span>
      <span>Global CSS is defined in <a target="_blank" href="https://github.com/sorincom/vue-dnd-list-demo/blob/main/src/App.vue">App.vue</a></span>
    </template>
  </DemoLayout>
</template>

<script>

import { DnDList } from 'vue-dnd-list'
import DemoLayout from '@/components/DemoLayout.vue'

export default {
  name: 'DragHandleView',
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
}

</script>

<style scoped lang="scss">

.drag-handle {
  display: flex;
  justify-content: flex-end;
  user-select: none;
  pointer-events: all;
  cursor: grabbing;
  &:before {
    content: "።";
    margin: -8px 0;
    font-size: 24px;
    color: rgba(#000, 0.6);
  }
}

</style>