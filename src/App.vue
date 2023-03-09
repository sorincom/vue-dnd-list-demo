<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink :to="{name: 'simple'}">Simple</RouterLink>
      <RouterLink :to="{name: 'two-lists'}">Two Lists</RouterLink>
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
    &.router-link-exact-active {
      color: var(--color-text);
    }
    &.router-link-exact-active:hover {
      background-color: transparent;
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
