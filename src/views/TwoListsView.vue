<template>
  <aside>
    <section>
      <h4>List A</h4>
      <article><input id="copyA" type="checkbox" v-model="copyA" /><label for="copyA">Copy</label></article>
      <article><input id="acceptA" type="checkbox" v-model="acceptA" /><label for="acceptA">Accept</label></article>
    </section>
    <section>
      <h4>List B</h4>
      <article><input id="copyB" type="checkbox" v-model="copyB" /><label for="copyB">Copy</label></article>
      <article><input id="acceptB" type="checkbox" v-model="acceptB" /><label for="acceptB">Accept</label></article>
    </section>
  </aside>
  <main>
    <DnDList :items="itemsA" :copy="copyA" :accept="acceptA" class="list">
      <template v-slot:item="{ item }">
        <div class="list-item" :style="`background: ${item.color}`">
          <span>{{ item.title }}</span>
        </div>
      </template>
    </DnDList>
    <DnDList :items="itemsB" :copy="copyB" :accept="acceptB" class="list">
      <template v-slot:item="{ item, index }">
        <div class="list-item" :style="`background: ${item.color}`">
          <span>{{ item.title }}</span>
          <!-- <button style="pointer-events: all;" @click="onButtonClick(item, index)">Click</button> -->
        </div>
      </template>
    </DnDList>
  </main>
</template>

<script>

import randomColor from "randomcolor"
import { DnDList } from 'vue-dnd-list'

export default {
  name: 'TwoListsView',
  components: { DnDList },
  data() {
    return {
      copyA: false,
      acceptA: true,
      copyB: false,
      acceptB: true,
      itemsA: [
        { id: "id-a0", title: "Item A-0", color: randomColor({luminosity: 'light'}) },
        { id: "id-a1", title: "Item A-1", color: randomColor({luminosity: 'light'}) },
        { id: "id-a2", title: "Item A-2", color: randomColor({luminosity: 'light'}) },
        { id: "id-a3", title: "Item A-3", color: randomColor({luminosity: 'light'}) },
        { id: "id-a4", title: "Item A-4", color: randomColor({luminosity: 'light'}) },
        { id: "id-a5", title: "Item A-5", color: randomColor({luminosity: 'light'}) },
        { id: "id-a6", title: "Item A-6", color: randomColor({luminosity: 'light'}) },
        { id: "id-a7", title: "Item A-7", color: randomColor({luminosity: 'light'}) },
        { id: "id-a8", title: "Item A-8", color: randomColor({luminosity: 'light'}) },
        { id: "id-a9", title: "Item A-9", color: randomColor({luminosity: 'light'}) },
      ],
      itemsB: [
        { id: "id-b0", title: "Item B-0", color: randomColor({luminosity: 'light'}) },
        { id: "id-b1", title: "Item B-1", color: randomColor({luminosity: 'light'}) },
        { id: "id-b2", title: "Item B-2", color: randomColor({luminosity: 'light'}) },
        { id: "id-b3", title: "Item B-3", color: randomColor({luminosity: 'light'}) },
        { id: "id-b4", title: "Item B-4", color: randomColor({luminosity: 'light'}) },
        { id: "id-b5", title: "Item B-5", color: randomColor({luminosity: 'light'}) },
        { id: "id-b6", title: "Item B-6", color: randomColor({luminosity: 'light'}) },
        { id: "id-b7", title: "Item B-7", color: randomColor({luminosity: 'light'}) },
        { id: "id-b8", title: "Item B-8", color: randomColor({luminosity: 'light'}) },
        { id: "id-b9", title: "Item B-9", color: randomColor({luminosity: 'light'}) },
      ],
    }
  }
}

</script>

<style scoped lang="scss">

main {
  display: flex;
  justify-content: center;
  gap: 60px;
}

aside {
  display: flex;
  gap: 60px;
  section {
    padding: 10px;
  }
  article {
    display: flex;
    gap: 5px;
    align-items: center;
  }
}

.list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 400px;

  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 400px;
  outline: 4px dotted #dadada;
  outline-offset: 10px;
  border-radius: 3px;

  .list-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border: 1px solid var(--color-border);
    border-radius: 3px;
  }
}

</style>