import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'

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
    changeCnt(state, value){ // mutations 안에 chageCnt라는 함수를 선언했다. state의 값 변경을 위해서는 state가 필요, value는 외부에서 값을 전달 받기 위한 payload이다.
      state.count += value; // 전달 받은 값을 더한다.
    },
  },
  actions: {
    changeCnt(context, value){
      context.commit('changeCnt', value); // actions에 정의 된 함수로 mutations에 있는 changeCnt를 commit 하였다.
    }
  },
  modules: {
    auth : auth
  }
})
