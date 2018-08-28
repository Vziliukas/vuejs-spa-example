<template>
  <main class="app-container">
    <article class="app-container__article">
      <h1 class="app-container__title">{{ $route.meta.pageTitle }}</h1>
      <slot></slot>
    </article>
  </main>
</template>

<script>
export default {
  name: 'AppContainer'
}
</script>

<style lang="scss" scoped>
.app-container {
  width: 100%;
  background-color: #fff;
  border: 1px solid #979797;
  border-radius: 4px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 15);
  padding: 60px;
  padding-bottom: 112px;

  &__title {
    color: rgba(black, 0.87);
    font-size: 24px;
    text-transform: uppercase;
    font-weight: 600;
    padding-bottom: 43px;
  }
}
</style>
