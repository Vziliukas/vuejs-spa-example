<template>
  <div class="app-container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'AppImageContainer'
}
</script>

<style lang="scss" scoped>
.app-container {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -15px;
}
</style>
