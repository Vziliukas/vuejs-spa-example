<template>
  <header class="app-header">
    <app-nav/>
    <app-hero/>
  </header>
</template>

<script>
import AppNav from './AppNav'
import AppHero from './AppHero'

export default {
  name: 'AppHeader',
  components: {
    AppNav,
    AppHero
  }
}
</script>
<style lang="scss" scoped>
.app-header {
  width: 100%;
  min-height: 50vh;
  background-color: #3252e5;
}
</style>
