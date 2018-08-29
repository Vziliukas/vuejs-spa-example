<template>
  <div class="app-text-field">
    <label class="app-text-field__label">Pavadinimas</label>
    <input
      class="app-text-field__input"
      type="text"
      :value="title"
      @input="$emit('input', $event.target.value)"
    >
  </div>
</template>

<script>
export default {
  name: 'AppTextField',
  props: {
    title: String
  }
}
</script>

<style lang="scss" scoped>
.app-text-field {
  display: flex;
  flex-direction: column;

  &__label {
    font-size: 14px;
    margin-bottom: 9px;
    text-transform: uppercase;
  }

  &__input {
    border: 1px solid black;
    border-radius: 4px;
    height: 45px;
    padding: 15px;
    margin-bottom: 23px;
  }
}
</style>
