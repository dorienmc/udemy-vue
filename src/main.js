import Vue from 'vue'
import VueRouter from 'vue-router';

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

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
