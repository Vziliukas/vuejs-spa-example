<template>
  <button class="app-button">Siusti</button>
</template>

<script>
export default {
  name: 'AppButton'
}
</script>

<style lang="scss" scoped>
.app-button {
  width: 170px;
  height: 45px;
  border: 1px solid #979797;
  background-color: #3252e5;
  border-radius: 4px;
  color: #fff;
  text-transform: uppercase;
  font-size: 14;
  padding: 15px 60px;
  opacity: 1;
  transition: 2s ease;

  &:hover {
    opacity: 0.6;
  }
}
</style>
