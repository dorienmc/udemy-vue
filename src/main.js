import Vue from 'vue'
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

import App from './App.vue'
import { routes } from './routes';
import store from './store/store.js';

Vue.use(VueRouter);
const router = new VueRouter({
  mode: 'history',
  routes
});

Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString();
});

Vue.use(VueResource);
Vue.http.options.root = "https://vue-js-udemy-stock-trader.firebaseio.com/";

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
