<template>
  <div class="view-contacts">
    <div class="view-contacts__input">
      <app-text-field/>
    </div>
    <app-textarea/>
    <app-button/>
  </div>
</template>

<script>
import AppTextField from '@/components/AppTextField'
import AppTextarea from '@/components/AppTextarea'
import AppButton from '@/components/AppButton'

export default {
  name: 'Contacts',
  components: {
    AppTextField,
    AppTextarea,
    AppButton
  }
}
</script>

<style lang="scss" scoped>
.view-contacts {
  &__input {
    width: 300px;
  }
}
</style>
