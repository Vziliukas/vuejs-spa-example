<template>
  <section class="app-card">
    <figure class="app-card__photo">
      <img class="app-card__photo-img" :src="image.src" alt="">
    </figure>
    <h3 class="app-card__title">{{ image.title }}</h3>
  </section>
</template>

<script>
export default {
  name: 'AppCard',
  props: {
    image: {
      src: String,
      title: String
    }
  }
}
</script>

<style lang="scss" scoped>
.app-card {
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid #979797;
  border-radius: 4px;
  background-color: #3252e5;
  padding: 24px;

  &__photo {
    width: 100%;

    &-img {
      width: 100%;
    }
  }

  &__title {
    color: #fff;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 400;
    padding-top: 30px;
    padding-bottom: 56px;
  }
}
</style>
