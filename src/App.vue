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
      <RouterLink :to="{name: 'pointer-events'}">Pointer Events</RouterLink>
      <RouterLink :to="{name: 'custom-animation'}">Custom Animation</RouterLink>
      <RouterLink :to="{name: 'horizontal'}">Horizontal</RouterLink>
    </nav>
  </header>
  <RouterView />
</template>

<style scoped lang="scss">
nav {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 10px;
  height: 60px;
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

</style>

<style lang="scss">

.list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 400px;

  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 400px;
  outline: 3px solid #f0f0f0;
  outline-offset: 10px;
  border-radius: 4px;

  .list-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-radius: 6px;
  }

  &.dragging-over-when-empty {
    background: #f0f0f0;
  }

  &.horizontal {
    flex-direction: row;
    gap: 10px;
    width: 80%;
    align-items: center;
    overflow-x: auto;
    min-height: 80px;
  }
}

.custom-drag-source {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: deepskyblue;
  color: white;
  cursor: grab;
}

</style>
