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
    authUser (state, userData) {
      state.idToken = userData.token
      state.userId = userData.userId
    }
  },
  actions: {
    signup({commit}, authData) {
      axios
        .post("/accounts:signUp?key=" + this.state.API_KEY, {
          email: authData.email,
          password: authData.password,
          returnSecureToken: true,
        })
        .then((response) => {
          console.log(response)
          commit('authUser', {
            token: response.data.idToken, 
            userId: response.data.localId
          })
        })
        .then((error) => console.error(error));
    },
    login({commit}, authData) {
      axios
        .post("/accounts:signInWithPassword?key=" + this.state.API_KEY, {
          email: authData.email,
          password: authData.password,
          returnSecureToken: true,
        })
        .then((response) => {
          console.log(response);
          commit("authUser", {
            token: response.data.idToken,
            userId: response.data.localId,
          });
        });
    }
  },
  getters: {

  }
})