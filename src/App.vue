<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink :to="{name: 'simple'}">Simple</RouterLink>
      <RouterLink :to="{name: 'two-lists'}">Two Lists</RouterLink>
      <RouterLink :to="{name: 'custom-drag-source'}">Custom Drag Source</RouterLink>
      <RouterLink :to="{name: 'custom-accept'}">Custom Accept</RouterLink>
    </nav>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style scoped lang="scss">
nav {
  display: flex;
  gap: 10px;
  width: 100%;
  padding: 10px;
  a {
    display: inline-block;
    padding: 4px 8px;
    border-radius: 4px;
    text-decoration: none;
    color: royalblue;
    font-weight: 600;
    &:hover {
      text-decoration: underline;
    }
    &.router-link-exact-active {
      background: #efefef;
      text-decoration: none;
    }
    &.router-link-exact-active:hover {
      box-shadow: none;
      text-decoration: none;
    }
  }
}
main {
  margin: 10px;
  main {
    margin: unset;
  }
}
</style>
