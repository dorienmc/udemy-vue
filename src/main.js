import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

//Add plugin
Vue.use(VueResource);
//Global config of vue-resource
Vue.http.options.root = 'https://udemy-vuejs-http-45e40.firebaseio.com/data.json';
//Interceptors
Vue.http.interceptors.push((request, next) => {
  console.log(request);
  if(request.method == 'POST') { 
    request.method = 'PUT';
  }
  next();
});

new Vue({
  el: '#app',
  render: h => h(App)
})
