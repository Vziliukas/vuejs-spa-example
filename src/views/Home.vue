<template>
  <div class="view-home">
    <div class="view-home__container">
      <app-card/>
    </div>
    <div class="view-home__container">
      <app-card/>
    </div>
    <div class="view-home__container">
      <app-card/>
    </div>
  </div>
</template>

<script>
import AppCard from '@/components/AppCard'

export default {
  name: 'Home',
  components: {
    AppCard
  }
}
</script>

<style lang="scss" scoped>
.view-home {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>
