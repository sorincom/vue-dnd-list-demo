<template>
  <DemoLayout>
    <template #demo>
      <article v-dragsource="customItem" class="custom-drag-source">
        Drag Me!
      </article>
      <section class="foo">
        <DnDList listId="foo" :items="itemsFoo" :accept="acceptFoo" class="list">
          <template v-slot:item="{ item }">
            <div class="list-item" :style="`background: ${item.color};`">
              <span>{{ item.title }}</span>
            </div>
          </template>
        </DnDList>
      </section>
      <section class="bar">
        <DnDList listId="bar" :items="itemsBar" :accept="acceptBar" class="list">
          <template v-slot:item="{ item, index }">
            <div class="list-item" :style="`background: ${item.color};`">
              <span>{{ item.title }}</span>
            </div>
          </template>
        </DnDList>
      </section>
      <section class="baz">
        <DnDList listId="baz" :items="itemsBaz" :accept="acceptBaz" class="list">
          <template v-slot:item="{ item, index }">
            <div class="list-item" :style="`background: ${item.color};`">
              <span>{{ item.title }}</span>
            </div>
          </template>
        </DnDList>
      </section>
    </template>
    <template #description>
      Control from which sources each list accepts items.
    </template>
    <template #source>
      <span><a target="_blank" href="https://github.com/sorincom/vue-dnd-list-demo/blob/main/src/views/CustomAcceptView.vue">Source</a></span>
      <span>Global CSS is defined in <a target="_blank" href="https://github.com/sorincom/vue-dnd-list-demo/blob/main/src/App.vue">App.vue</a></span>
    </template>
    <template #setup>
      <section>
        <h4>foo accepts from:</h4>
        <article><input id="acceptFoo1" type="checkbox" value="bar" v-model="acceptFoo" /><label for="acceptFoo1">bar</label></article>
        <article><input id="acceptFoo2" type="checkbox" value="baz" v-model="acceptFoo" /><label for="acceptFoo2">baz</label></article>
        <article><input id="acceptFoo3" type="checkbox" value="blue-circle" v-model="acceptFoo" /><label for="acceptFoo3">blue circle</label></article>
      </section>
      <section>
        <h4>bar accepts from:</h4>
        <article><input id="acceptBar1" type="checkbox" value="foo" v-model="acceptBar" /><label for="acceptBar1">foo</label></article>
        <article><input id="acceptBar2" type="checkbox" value="baz" v-model="acceptBar" /><label for="acceptBar2">baz</label></article>
        <article><input id="acceptBar3" type="checkbox" value="blue-circle" v-model="acceptBar" /><label for="acceptBar3">blue circle</label></article>
      </section>
      <section>
        <h4>baz accepts from:</h4>
        <article><input id="acceptBaz1" type="checkbox" value="foo" v-model="acceptBaz" /><label for="acceptBaz1">foo</label></article>
        <article><input id="acceptBaz2" type="checkbox" value="bar" v-model="acceptBaz" /><label for="acceptBaz2">bar</label></article>
        <article><input id="acceptBaz3" type="checkbox" value="blue-circle" v-model="acceptBaz" /><label for="acceptBaz3">blue circle</label></article>
      </section>
    </template>
  </DemoLayout>
</template>

<script>

import { DnDList, dragsource } from 'vue-dnd-list'
import DemoLayout from '@/components/DemoLayout.vue'

export default {
  name: 'CustomAcceptView',
  components: { DnDList, DemoLayout },
  directives: { dragsource },
  data() {
    return {
      acceptFoo: ['bar', 'baz', 'blue-circle'],
      acceptBar: ['foo', 'baz', 'blue-circle'],
      acceptBaz: ['foo', 'bar', 'blue-circle'],
      itemsFoo: [
        { id: "id-foo0", title: "Item foo-0", color: `hsl(330,90%,90%)` },
        { id: "id-foo1", title: "Item foo-1", color: `hsl(330,90%,88%)` },
        { id: "id-foo2", title: "Item foo-2", color: `hsl(330,90%,86%)` },
        { id: "id-foo3", title: "Item foo-3", color: `hsl(330,90%,84%)` },
        { id: "id-foo4", title: "Item foo-4", color: `hsl(330,90%,82%)` },
        { id: "id-foo5", title: "Item foo-5", color: `hsl(330,90%,80%)` },
        { id: "id-foo6", title: "Item foo-6", color: `hsl(330,90%,78%)` },
        { id: "id-foo7", title: "Item foo-7", color: `hsl(330,90%,76%)` },
        { id: "id-foo8", title: "Item foo-8", color: `hsl(330,90%,74%)` },
        { id: "id-foo9", title: "Item foo-9", color: `hsl(330,90%,72%)` },
      ],
      itemsBar: [
        { id: "id-bar0", title: "Item bar-0", color: `hsl(200,90%,90%)` },
        { id: "id-bar1", title: "Item bar-1", color: `hsl(200,90%,88%)` },
        { id: "id-bar2", title: "Item bar-2", color: `hsl(200,90%,86%)` },
        { id: "id-bar3", title: "Item bar-3", color: `hsl(200,90%,84%)` },
        { id: "id-bar4", title: "Item bar-4", color: `hsl(200,90%,82%)` },
        { id: "id-bar5", title: "Item bar-5", color: `hsl(200,90%,80%)` },
        { id: "id-bar6", title: "Item bar-6", color: `hsl(200,90%,78%)` },
        { id: "id-bar7", title: "Item bar-7", color: `hsl(200,90%,76%)` },
        { id: "id-bar8", title: "Item bar-8", color: `hsl(200,90%,74%)` },
        { id: "id-bar9", title: "Item bar-9", color: `hsl(200,90%,72%)` },
      ],
      itemsBaz: [
        { id: "id-baz0", title: "Item baz-0", color: `hsl(100,90%,90%)` },
        { id: "id-baz1", title: "Item baz-1", color: `hsl(100,90%,88%)` },
        { id: "id-baz2", title: "Item baz-2", color: `hsl(100,90%,86%)` },
        { id: "id-baz3", title: "Item baz-3", color: `hsl(100,90%,84%)` },
        { id: "id-baz4", title: "Item baz-4", color: `hsl(100,90%,82%)` },
        { id: "id-baz5", title: "Item baz-5", color: `hsl(100,90%,80%)` },
        { id: "id-baz6", title: "Item baz-6", color: `hsl(100,90%,78%)` },
        { id: "id-baz7", title: "Item baz-7", color: `hsl(100,90%,76%)` },
        { id: "id-baz8", title: "Item baz-8", color: `hsl(100,90%,74%)` },
        { id: "id-baz9", title: "Item baz-9", color: `hsl(100,90%,72%)` },
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

<style scoped lang="scss">

.list {
  width: 300px;
}

.foo, .bar, .baz {
  &::before {
    display: block;
    position: relative;
    top: -20px;
    margin-top: -20px;
  }
}

.foo {
  &::before {
    content: 'foo';
  }
}

.bar {
  &::before {
    content: 'bar';
  }
}

.baz {
  &::before {
    content: 'baz';
  }
}

</style>