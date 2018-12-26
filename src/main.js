import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import App from './App'
// 路由
import router from './router'
// 引入axios
import axios from 'axios'
import Qs from 'qs'
// 引入vuex
import store from './store'

Vue.prototype.axios = axios;
Vue.prototype.qs = Qs;

Vue.config.productionTip = false

Vue.use(ElementUI);

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App></App>'
})
