<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink :to="{name: 'simple'}">Simple</RouterLink>
      <RouterLink :to="{name: 'drag-handle'}">Drag Handle</RouterLink>
      <RouterLink :to="{name: 'two-lists'}">Two Lists</RouterLink>
      <RouterLink :to="{name: 'custom-drag-source'}">Custom Drag Source</RouterLink>
      <RouterLink :to="{name: 'custom-accept'}">Custom Accept</RouterLink>
      <RouterLink :to="{name: 'custom-animation'}">Custom Animation</RouterLink>
      <RouterLink :to="{name: 'horizontal'}">Horizontal</RouterLink>
      <RouterLink :to="{name: 'grid'}">Grid</RouterLink>
      <RouterLink :to="{name: 'post-drop'}">Post Drop</RouterLink>
      <RouterLink :to="{name: 'gap-optimization'}">Gap Optimization</RouterLink>
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
  min-height: 44px;
  max-height: 600px;
  overflow-y: auto;
  overflow-x: hidden;

  outline: 3px solid #f0f0f0;
  outline-offset: 10px;
  border-radius: 4px;

  &.dragging-over-when-empty {
    background: #f0f0f0;
  }

  &.horizontal {
    flex-direction: row;
    gap: 10px;
    width: 80%;
    align-items: center;
    overflow-x: auto;
    overflow-y: hidden;
    min-height: 60px;
  }
}

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
  width: 600px;
  min-height: 60px;

  outline: 3px solid #f0f0f0;
  outline-offset: 10px;
  border-radius: 4px;

  &.dragging-over-when-empty {
    background: #f0f0f0;
  }
}

.list-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-radius: 6px;
  user-select: none;
}

.custom-drag-source {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: dodgerblue;
  color: white;
  cursor: grab;
  font-size: 10px;
  font-weight: 600;
}

</style>
