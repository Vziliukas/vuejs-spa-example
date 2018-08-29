<template>
  <div class="view-contacts">
    <div v-if="isEmpty" class="view-contacts__warrning">
      Please fill form correctly
    </div>
    <template v-if="!success">
      <div class="view-contacts__input">
        <app-text-field v-model="form.title"/>
      </div>
      <app-textarea v-model="form.body"/>
      <app-button @click.native="handleSubmit"/>
    </template>
    <div v-else class="view-contacs-success">
      <pre>{{ asyncData }}</pre>
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
      form: {
        title: '',
        body: ''
      },
      asyncData: []
    }
  },
  methods: {
    async handleSubmit () {
      if (this.form.title.length < 1 && this.form.body.length < 1) {
        this.isEmpty = true
      } else {
        this.isEmpty = false
        const response = await this.axios.post('https://jsonplaceholder.typicode.com/posts', {
          userId: 1,
          ...this.form
        })
        if (response.status === 201) {
          this.success = true
          this.asyncData = response.data
        }
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
