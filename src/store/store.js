import Vue from 'vue';
import Vuex from 'vuex';

//Register plugin
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    counter: 0,
    value: 0
  },
  getters: {
    doubleCounter: (state) => {
      return state.counter * 2;
    },
    stringCounter: state => {
      return state.counter + ' Clicks';
    },
    value: state => {
      return state.value;
    }
  },
  mutations: {
    increment: (state, payload) => {
      state.counter += payload;
    },
    decrement: state => {
      state.counter--;
    },
    updateValue: (state, payload) => {
      state.value = payload;
    }
  },
  actions: {
    increment: ({ commit }, payload ) => {
      commit('increment', payload);
    },
    decrement: ({commit}) => { //If you only need the commit part you can do it like this
      commit('decrement');
    },
    asyncIncrement: ({commit}, payload) => {
      setTimeout(() => {
        commit('increment',payload.duration);
      }, payload.duration);
    },
    asyncDecrement: ({ commit }) => {
      setTimeout(() => {
        commit('decrement');
      }, 1000);
    },
    updateValue: ({ commit }, payload) => {
      commit('updateValue', payload);
    }
  }
});