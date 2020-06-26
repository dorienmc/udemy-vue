import Vue from 'vue';
import Vuex from 'vuex';
import counter from './modules/counter.js';
import * as actions from './actions.js';
import * as mutations from './mutations.js';
import * as getters from './getters.js';

//Register plugin
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    value: 0
  },
  getters: {
    ...getters
  },
  mutations,
  actions,
  modules: {
    counter
  }
});