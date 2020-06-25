import Vue from 'vue';
import Vuex from 'vuex';

//Register plugin
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    counter: 0
  }
});