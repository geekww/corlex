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

// 引入富文本
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

Vue.prototype.axios = axios;
Vue.prototype.qs = qs;

Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.use(mavonEditor)

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App></App>',
  // 初始化数据
  mounted:function(){
    // this.$nextTick(function(){
    //   this.axios({
    //     method:'post',
    //     url:'/api/corlex/getInitData',
    //   }).then(response => {
    //     let res = response.data;
    //     // this.$store.commit("changeProjectItem", res.projectItem);
    //     // this.$store.commit("changeHrItem", res.hrItem);
    //     this.$store.commit("changePositionItem", res.positionItem);
    //   }).catch(err => {
    //     this.$notify({
    //       title: '失败',
    //       message: '网络错误',
    //       type: 'error'
    //     });
    //   });
    // });
  },
})
