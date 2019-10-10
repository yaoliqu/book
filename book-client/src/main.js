import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import './plugins/element.js'


Vue.config.productionTip = false

Vue.prototype.$http=axios.create({
  baseURL:"39.106.129.167:3000/api"
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
