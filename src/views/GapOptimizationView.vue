<template>
  <DemoLayout>
    <template #demo>
      <article v-dragsource="customItem" class="custom-drag-source">
        Drag Me!
      </article>
      <DnDList :items="items" class="list" :useGapOptimization="useGapOptimization">
        <template v-slot:item="{ item }">
          <div class="list-item" :style="`background: ${item.color}`">
            {{ item.title }}
          </div>
        </template>
      </DnDList>
    </template>
    <template #description>
      <p>
        Using the gap optimization feature (enabled by default). Gap between list items is exaggerated for demonstration purposes.
      </p>
      <p>
        To see how it works, uncheck `Use Gap Optimization` and drag the blue circle inside the list through a gap between items.
      </p>
    </template>
    <template #source>
      <a target="_blank" href="https://github.com/sorincom/vue-dnd-list-demo/blob/main/src/views/GapOptimizationView.vue">Source</a>
    </template>
    <template #setup>
      <section>
        <article><input id="useGapOptimization" type="checkbox" v-model="useGapOptimization" /><label for="useGapOptimization">Use Gap Optimization</label></article>
      </section>
    </template>
  </DemoLayout>
</template>

<script>

import { DnDList, dragsource } from 'vue-dnd-list'
import DemoLayout from '@/components/DemoLayout.vue'

export default {
  name: 'GapOptimizationView',
  components: { DnDList, DemoLayout },
  directives: { dragsource },
  data() {
    return {
      items: [
        { id: "id-0", title: "Item A", color: `hsl(  0,90%,80%)` },
        { id: "id-1", title: "Item B", color: `hsl( 36,90%,80%)` },
        { id: "id-2", title: "Item C", color: `hsl( 72,90%,80%)` },
      ],
      customItem: {
        source: 'blue-circle',
        data: {
          id: 'x',
          title: 'Dragged Item',
          color: 'dodgerblue'
        }
      },
      useGapOptimization: true
    }
  },
}

</script>

<style scoped>

.list {
  gap: 100px;
  max-height: unset;
}

</style>