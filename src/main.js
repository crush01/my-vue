import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/vendor/lib-flexible/flexible.css'
import '@/vendor/lib-flexible/flexible.js'
import '@/assets/styles/reset.scss'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
