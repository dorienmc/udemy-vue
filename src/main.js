import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

import router from './router'
import store from './store'

axios.defaults.baseURL = "https://vuejs-udemy-axios-d6bf5.firebaseio.com";
axios.defaults.headers.common['Authorization']='some_auth_token';
axios.defaults.headers.get['Accepts']='application/json';
const requestInterceptor = axios.interceptors.request.use(config => {
  console.log("Request interceptor", config)
  //do stuff
  return config
});
const responseInterceptor = axios.interceptors.response.use(response => {
  console.log("Response interceptor", response)
  //do stuff
  return response;
});

//remove interceptors
axios.interceptors.request.eject(requestInterceptor);
axios.interceptors.request.eject(responseInterceptor);


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
