<template>
  <div class="app-text-area">
    <label class="app-text-area__label">Zinute</label>
    <textarea
      class="app-text-area__textarea"
      cols="30"
      rows="10"
      :value="msg"
      @input="$emit('input', $event.target.value)"
    ></textarea>
  </div>
</template>

<script>
export default {
  name: 'AppTextField',
  props: {
    msg: String
  }
}
</script>

<style lang="scss" scoped>
.app-text-area {
  display: flex;
  flex-direction: column;

  &__label {
    font-size: 14px;
    margin-bottom: 9px;
    text-transform: uppercase;
  }

  &__textarea {
    border: 1px solid black;
    border-radius: 4px;
    padding: 15px;
    margin-bottom: 23px;
  }
}
</style>
