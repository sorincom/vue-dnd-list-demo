<template>
  <DemoLayout>
    <template #demo>
      <article v-dragsource="customItem" class="custom-drag-source">
        Drag Me!
      </article>
      <DnDList :items="items" class="grid">
        <template v-slot:item="{ item }">
          <div class="list-item" :style="`background: ${item.color};`">
            <span>{{ item.title }}</span>
          </div>
        </template>
      </DnDList>
    </template>
    <template #description>
      Grid Layout.
    </template>
    <template #source>
      <a target="_blank" href="https://github.com/sorincom/vue-dnd-list-demo/blob/main/src/views/GridView.vue">Source</a>
    </template>
  </DemoLayout>
</template>

<script>

import { DnDList, dragsource } from 'vue-dnd-list'
import DemoLayout from '@/components/DemoLayout.vue'

export default {
  name: 'GridView',
  components: { DnDList, DemoLayout },
  directives: { dragsource },
  data() {
    return {
      items: [
        { id: "id-a0", title: "Item A-0", color: `hsl(330,90%,90%)` },
        { id: "id-a1", title: "Item A-1", color: `hsl(330,90%,88%)` },
        { id: "id-a2", title: "Item A-2", color: `hsl(330,90%,86%)` },
        { id: "id-a3", title: "Item A-3", color: `hsl(330,90%,84%)` },
        { id: "id-a4", title: "Item A-4", color: `hsl(330,90%,82%)` },
        { id: "id-a5", title: "Item A-5", color: `hsl(330,90%,80%)` },
        { id: "id-a6", title: "Item A-6", color: `hsl(330,90%,78%)` },
        { id: "id-a7", title: "Item A-7", color: `hsl(330,90%,76%)` },
        { id: "id-a8", title: "Item A-8", color: `hsl(330,90%,74%)` },
        { id: "id-a9", title: "Item A-9", color: `hsl(330,90%,72%)` },
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
  }
}

</script>
