<template>
  <section class="app-post">
    <p class="app-post__number">#{{ data.id }}</p>
    <div class="app-post__container">
      <h1 class="app-post__title">  {{ data.title }}</h1>
      <p class="app-post__body"> {{ data.body }}</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Post',
  props: {
    data: Object,
    required: true
  }
}
</script>

<style lang="scss" scoped>
.app-post {
  display: flex;
  width: 100%;
  background-color: #eeeff3;
  border: 1px solid #979797;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 10);
  border-radius: 4px;
  padding: 15px;
  margin: 15px 0;

  &__number {
    align-self: center;
    color: #3252e5;
    font-size: 36px;
    font-weight: 600;
    padding: 10px;
    padding-right: 25px;
    border-right: 1px solid #3252e5;
    margin-right: 15px;
  }

  &__container {
    display: flex;
    flex-direction: column;
  }

  &__title {
    font-size: 24px;
    padding: 5px 0;
  }

  &__body {
    padding-top: 10px;
    font-size: 16px;
  }
}
</style>
