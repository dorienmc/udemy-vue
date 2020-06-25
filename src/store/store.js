import Vue from 'vue';
import Vuex from 'vuex';

//Register plugin
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    counter: 0
  },
  getters: {
    doubleCounter: (state) => {
      return state.counter * 2;
    },
    stringCounter: state => {
      return state.counter + ' Clicks';
    }
  },
  mutations: {
    increment: state => {
      state.counter++;
    },
    decrement: state => {
      state.counter--;
    }
  },
  actions: {
    increment: context => {
      context.commit('increment');
    },
    decrement: ({commit}) => { //If you only need the commit part you can do it like this
      commit('decrement')
    },
    asyncIncrement: ({commit}) => {
      setTimeout(() => {
        commit('increment');
      }, 1000);
    },
    asyncDecrement: ({ commit }) => {
      setTimeout(() => {
        commit('decrement');
      }, 1000);
    }
  }
});