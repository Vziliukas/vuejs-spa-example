<template>
  <div id="app">
    <app-header/>
    <main>
      <router-view></router-view>
    </main>
    <app-footer/>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader'
import AppFooter from './components/AppFooter'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

<style lang="scss">
.app {
  height: 100%;
}
</style>
