<template>
  <div class="app">
    <app-header/>
    <div class="app__container">
      <app-container>
        <router-view></router-view>
      </app-container>
    </div>
    <app-footer/>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader'
import AppContainer from './components/AppContainer'
import AppFooter from './components/AppFooter'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppContainer,
    AppFooter
  }
}
</script>

<style lang="scss">
.app {
  min-height: 100%;
  display: flex;
  flex-direction: column;

  &__container {
    flex: 1;
    margin-top: -42px;
    padding: 0 121px;
  }
}
</style>
