<template>
  <div class="view-contacts">
    <div v-if="isEmpty" class="view-contacts__warrning">
      Please fill form correctly
    </div>
    <template v-if="!success">
      <div class="view-contacts__input">
        <app-text-field v-model="name"/>
      </div>
      <app-textarea v-model="msg"/>
      <app-button @click.native="handleSubmit"/>
    </template>
    <div v-else class="view-contacs-success">
      <h3>{{ `Name: ${name}, Message: ${msg}` }}</h3>
    </div>
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
  },
  data () {
    return {
      isEmpty: false,
      success: false,
      name: '',
      msg: ''
    }
  },
  methods: {
    handleSubmit () {
      if (this.name.length < 1 && this.msg.length < 1) {
        this.isEmpty = true
      } else {
        this.isEmpty = false
        this.success = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.view-contacts {
  &__warrning {
    font-size: 16px;
    border: 1px solid rgba(rgb(161, 21, 21), 0.87);
    border-radius: 4px;
    background-color: rgb(228, 153, 153);
    padding: 15px;
    margin-bottom: 20px;
  }

  &__input {
    width: 300px;
  }
}
</style>
