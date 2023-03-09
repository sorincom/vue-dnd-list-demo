<template>
  <main>
    <DnDList :items="items" class="list">
      <template v-slot:item="{ item }">
        <div class="list-item" :style="`background: ${item.color}`">
          {{ item.title }}
        </div>
      </template>
    </DnDList>
  </main>
</template>

<script>

import randomColor from "randomcolor"
import { DnDList } from 'vue-dnd-list'

export default {
  name: 'SimpleView',
  components: { DnDList },
  data() {
    return {
      items: [
        { id: "id-0", title: "Item A", color: randomColor({luminosity: 'light'}) },
        { id: "id-1", title: "Item B", color: randomColor({luminosity: 'light'}) },
        { id: "id-2", title: "Item C", color: randomColor({luminosity: 'light'}) },
        { id: "id-3", title: "Item D", color: randomColor({luminosity: 'light'}) },
        { id: "id-4", title: "Item E", color: randomColor({luminosity: 'light'}) },
        { id: "id-5", title: "Item F", color: randomColor({luminosity: 'light'}) },
        { id: "id-6", title: "Item G", color: randomColor({luminosity: 'light'}) },
        { id: "id-7", title: "Item H", color: randomColor({luminosity: 'light'}) },
        { id: "id-8", title: "Item I", color: randomColor({luminosity: 'light'}) },
        { id: "id-9", title: "Item J", color: randomColor({luminosity: 'light'}) },
      ],
    }
  },
}

</script>

<style scoped lang="scss">

main {
  display: flex;
  gap: 10px;
}

.list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 400px;
  margin: auto;
  outline: 4px dotted #ccc;
  outline-offset: 10px;
  border-radius: 3px;
  .list-item {
    padding: 10px;
    border-radius: 3px;
  }
}

</style>