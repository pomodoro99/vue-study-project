import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token : ''
  },
  getters: {
    token(state){
      return state.token;
    },

    hasToken(state){
      return !!state.token;
    }
  },
  mutations: {
    setToken(state, payload){
      state.token = payload;
    }
  },
  actions: {
    setToken({commit}, payload){
      commit('setToken', payload);
    }
  },
  modules: {
  }
})
