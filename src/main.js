import Vue from 'vue'
import App from './App.vue'
import store from './store' // vuex 관련 파일을 import 한다.

Vue.config.productionTip = false

new Vue({
  store, // <- Vue 객체에 store를 전역으로 선언해준다.
  render: h => h(App)
}).$mount('#app')
