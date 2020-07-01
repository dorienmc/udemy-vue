import Vue from 'vue'
import Vuex from 'vuex'
import axios from './axios-auth.js'
import globalAxios from 'axios'
import router from './router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    idToken: null,
    userId: null,
    API_KEY: "AIzaSyDLUwsnbS7L_vpNAVvxrf03u9Csflv6jmc",
    user: null
  },
  mutations: {
    authUser (state, userData) {
      state.idToken = userData.token
      state.userId = userData.userId
    },
    storeUser(state, user) {
      state.user = user
    },
    clearAuthData(state) {
      state.idToken = null
      state.userId = null
      state.user=null
    }
  },
  actions: {
    setLogoutTimer ({dispatch}, expirationTime) {
      setTimeout(() => {
        dispatch('logout')
      },expirationTime * 1000)
    },
    signup({commit, dispatch}, authData) {
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

          storeLocalData(response);
          dispatch('storeUser', authData)
          dispatch("setLogoutTimer", response.data.expiresIn);
        })
        .catch((error) => console.error(error));
    },
    login({commit, dispatch}, authData) {
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

          storeLocalData(response);
          dispatch("setLogoutTimer", response.data.expiresIn);
          router.push('/dashboard')
        });
    },
    storeUser ({commit, state}, userData) {
      if (!state.idToken) {
        return
      }

      userData.userID = state.userId

      globalAxios
        .post("/users.json" + "?auth=" + state.idToken, userData)
        .then((res) => console.log(res))
        .catch((error) => console.error(error));
    },
    fetchUser( {commit, state}) {
      if (!state.idToken) {
        return;
      }

      globalAxios
        .get("/users.json" + "?auth=" + state.idToken)
        .then((response) => {
          console.log(response);
          const data = response.data;
          const users = [];
          for (let key in data) {
            const user = data[key];
            user.id = key;
            users.push(user);
          }
          
          let currentUser = users.find(item => item.userID == state.userId)
          console.log(currentUser)

          commit("storeUser", currentUser);
        })
        .catch((error) => console.error(error));
    },
    tryAutoLogin({commit}) {
      const token = localStorage.getItem('token')
      if (!token) {
        return
      }
      const expirationDate = localStorage.getItem("expirationDate")
      const now = new Date()
      console.log(expirationDate, now, now>=expirationDate)
      //Check if token is invalid
      if (now >= expirationDate) {
        return
      }
      const userId = localStorage.getItem('userId')
      commit('authUser', {
        token: token,
        userId: userId
      })
      router.push("/dashboard");
    },
    logout( {commit}) {
      commit('clearAuthData')
      localStorage.removeItem('token')
      localStorage.removeItem("expirationDate");
      localStorage.removeItem("userId");
      router.replace('/signin')
    }
  },
  getters: {
    user (state) {
      return state.user
    },
    isAuthenticated(state) {
      return state.idToken !== null
    }
  }
})

function storeLocalData(response) {
  const now = new Date() //Time in seconds
  const expirationDate = new Date(now.getTime() + response.data.expiresIn * 1000)
  localStorage.setItem('token', response.data.idToken)
  localStorage.setItem('expirationDate', expirationDate)
  localStorage.setItem("userId", response.data.localId)
}
