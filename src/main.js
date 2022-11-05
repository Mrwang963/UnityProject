import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.use(ElementUI);

Vue.config.productionTip = false



axios.defaults.timeout = 120000;

axios.interceptors.request.use(config =>{
  let token = localStorage.getItem('user');
  if(token){
    config.headers.token = token.token
  }
  return config
})

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')


