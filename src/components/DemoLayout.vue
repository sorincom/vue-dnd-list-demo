<template>
  <section class="layout">
    <main>
      <slot name="demo"></slot>
    </main>
    <aside>
      <section class="description">
        <slot name="description"></slot>
      </section>
      <section class="source">
        <slot name="source"></slot>
      </section>
      <section class="setup">
        <slot name="setup"></slot>
      </section>
    </aside>
  </section>
</template>

<style scoped lang="scss">

.layout {
  display: flex;
  gap: 10px;
  margin-top: 40px;
  flex: 1;
  >main {
    flex: 3;
    display: flex;
    gap: 40px;
    justify-content: center;
    align-items: flex-start;
    padding: 10px 0;
    height: calc(100vh - 40px - 60px);
  }
  >aside {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 20px;
    min-height: 100%;
    border-top-left-radius: 10px;
    background: #fafafa;
    .description {
      border-bottom: 1px solid rgba(#000, 0.075);
      padding-bottom: 10px;
    }
    &:deep(article) {
      display: flex;
      gap: 10px;
    }
    &:deep(h4) {
      margin-top: 10px;
    }
  }
}

</style>