import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count : 0 // store에 count 선언
  },
  getters: {
    formatCnt(state) { // 평소에 사용하던 vue와는 다르게 paramter로 state를 넣어주어야 한다.
      return String(state.count).padStart(2, '0'); // 무조건 2자리수로 자리수가 부족하면 0을 채우도록 하였다.
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
