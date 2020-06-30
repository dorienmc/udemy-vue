import Vue from 'vue'
import Vuex from 'vuex'
import axios from './axios-auth.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    idToken: null,
    userId: null,
    API_KEY: "AIzaSyDLUwsnbS7L_vpNAVvxrf03u9Csflv6jmc"
  },
  mutations: {

  },
  actions: {
    signup({commit}, authData) {
      axios
        .post("/accounts:signUp?key=" + this.state.API_KEY, {
          email: authData.email,
          password: authData.password,
          returnSecureToken: true,
        })
        .then((response) => console.log(response))
        .then((error) => console.error(error));
    },
    login({commit}, authData) {
      axios.post("/accounts:signInWithPassword?key=" + this.state.API_KEY, {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true,
      });
    }
  },
  getters: {

  }
})