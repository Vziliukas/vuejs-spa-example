<template>
  <footer class="app-footer">
    <p class="app-footer__p">
      © 2018 Vytautas Žiliukas
    </p>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>

<style lang="scss" scoped>
.app-footer {
  display: flex;
  justify-content: center;
  padding-top: 49px;
  padding-bottom: 34px;

  &__p {
    font-size: 12px;
    color: rgba(black, 0.87);
  }
}
</style>
