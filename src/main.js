import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import App from './App'
// 路由
import router from './router'
// 引入axios
import axios from 'axios'
import qs from 'qs'
// 引入vuex
import store from './store'

Vue.prototype.axios = axios;
Vue.prototype.qs = qs;

Vue.config.productionTip = false

Vue.use(ElementUI);

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App></App>',
  // 初始化数据
  mounted:function(){
    this.$nextTick(function(){
      this.axios({
        method:'post',
        url:'/api/corlex-backstage/model/project/getItem.jsp',
      }).then(response => {
        let res = response.data;
        this.$store.commit("getProjectItem", res.projectItem);
        this.$store.commit("getHrItem", res.hrItem);
      }).catch(err => {
        this.$notify({
          title: '失败',
          message: '网络错误',
          type: 'error'
        });
      });
    });
  },
})
