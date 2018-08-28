<template>
  <div class="app-hero">
    <h1 class="app-hero__title">Vytautas Žiliukas</h1>
    <h3 class="app-hero__subtitle">Portfolio</h3>
  </div>
</template>

<script>
export default {
  name: 'AppHero'
}
</script>

<style lang="scss" scoped>
.app-hero {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-transform: uppercase;
  color: #fff;

  &__title {
    padding-top: 180px;
    padding-bottom: 18px;
    font-size: 36px;
    font-weight: 600;
  }

  &__subtitle {
    font-size: 18px;
    padding-bottom: 143px;
    font-weight: 600;
  }
}
</style>

