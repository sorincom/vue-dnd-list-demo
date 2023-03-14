<template>
  <DemoLayout>
    <template #demo>
      <DnDList :items="itemsA" :copy="copyA" :accept="acceptA" class="list">
        <template v-slot:item="{ item }">
          <div class="list-item" :style="`background: ${item.color};`">
            <span>{{ item.title }}</span>
          </div>
        </template>
      </DnDList>
      <DnDList :items="itemsB" :copy="copyB" :accept="acceptB" class="list">
        <template v-slot:item="{ item }">
          <div class="list-item" :style="`background: ${item.color};`">
            <span>{{ item.title }}</span>
          </div>
        </template>
      </DnDList>
    </template>
    <template #description>
      Drag and drop between two lists using builtin shared DnD state.
    </template>
    <template #source>
      <a target="_blank" href="https://github.com/sorincom/vue-dnd-list-demo/blob/main/src/views/TwoListsView.vue">Source</a>
    </template>
    <template #setup>
      <section>
        <h4>List A</h4>
        <article><input id="copyA" type="checkbox" v-model="copyA" /><label for="copyA">Copy</label></article>
        <article><input id="acceptA" type="checkbox" :disabled="disableAcceptA" v-model="acceptA" /><label for="acceptA">Accept</label></article>
      </section>
      <section>
        <h4>List B</h4>
        <article><input id="copyB" type="checkbox" v-model="copyB" /><label for="copyB">Copy</label></article>
        <article><input id="acceptB" type="checkbox" :disabled="disableAcceptB" v-model="acceptB" /><label for="acceptB">Accept</label></article>
      </section>
    </template>
  </DemoLayout>
</template>

<script>

import { DnDList } from 'vue-dnd-list'
import DemoLayout from '@/components/DemoLayout.vue'

export default {
  name: 'TwoListsView',
  components: { DnDList, DemoLayout },
  data() {
    return {
      copyA: false,
      acceptA: true,
      disableAcceptA: false,
      copyB: false,
      acceptB: true,
      disableAcceptB: false,
      itemsA: [
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
      itemsB: [
        { id: "id-b0", title: "Item B-0", color: `hsl(200,90%,90%)` },
        { id: "id-b1", title: "Item B-1", color: `hsl(200,90%,88%)` },
        { id: "id-b2", title: "Item B-2", color: `hsl(200,90%,86%)` },
        { id: "id-b3", title: "Item B-3", color: `hsl(200,90%,84%)` },
        { id: "id-b4", title: "Item B-4", color: `hsl(200,90%,82%)` },
        { id: "id-b5", title: "Item B-5", color: `hsl(200,90%,80%)` },
        { id: "id-b6", title: "Item B-6", color: `hsl(200,90%,78%)` },
        { id: "id-b7", title: "Item B-7", color: `hsl(200,90%,76%)` },
        { id: "id-b8", title: "Item B-8", color: `hsl(200,90%,74%)` },
        { id: "id-b9", title: "Item B-9", color: `hsl(200,90%,72%)` },
      ],
    }
  },
  watch: {
    copyA: {
      handler: function (val) {
        if (val) {
          this.acceptA = false
        }
        this.disableAcceptA = val
      },
      immediate: true
    },
    copyB: {
      handler: function (val) {
        if (val) {
          this.acceptB = false
        }
        this.disableAcceptB = val
      },
      immediate: true
    },
  }
}

</script>
