import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    time: 2020.5,
  },
  getters: {
    html: state => {
      return state.time - state.html
    },
    css3: state => {
      return state.time - state.css3
    },
  },
  mutations: {
    changeLogin(state, user) {
      state.Authorization = user.Authorization;
      localStorage.setItem('Authorization', user.Authorization)
    },
  },
  actions: {
    html5: (context, time) => {


    }

  }
})
