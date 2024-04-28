import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';
import router from './router/index';
import store from './store';
import './mock'
axios.defaults.baseURL = "http://10.39.40.115:8088"
Vue.prototype.$http = axios

Vue.config.productionTip = false
//全局注册
Vue.use(ElementUI);
new Vue({
  render: h => h(App),
  router: router,
  store: store
}).$mount('#app')
