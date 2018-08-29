import Vue from 'vue'
import App from './App.vue'
import router from '@/packages/vue-router'
import '@/packages/vue-axios'

import '@/assets/scss/style.scss'

Vue.config.productionTip = false

new Vue({
  template: '<App/>',
  router,
  components: {
    App
  }
}).$mount('#app')
