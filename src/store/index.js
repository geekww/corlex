import Vue from 'vue'
import Vuex from 'vuex';
Vue.use(Vuex);

//要设置的全局访问的state对象
const state={
  showFooter: true,
  changableNum:0
};

//实时监听state值的变化(最新状态)
const getters = {
  //方法名随意,主要是来承载变化的showFooter的值
  isShow(state) {
    return state.showFooter
  },
  //承载变化的changableNum的值
  getChangedNum(){
    return state.changebleNum
  }
};

//自定义改变state初始值的方法，这里面的参数除了state之外还可以再传额外的参数(变量或对象);
const mutations = {
  show(state) {
    state.showFooter = true;
  },
  hide(state) {
    state.showFooter = false;
  },
  //传了需要增加的值sum
  newNum(state,sum){
    state.changableNum+=sum;
  }
};

//自定义触发mutations里函数的方法，context与store 实例具有相同方法和属性
const actions = {
  hideFooter(context) {
    context.commit('hide');
  },
  showFooter(context) {  //同上注释
    context.commit('show');
  },
  getNewNum(context,num){   //同上注释，num为要变化的形参
    context.commit('newNum',num)
  }
};

const store = new Vuex.Store(
  state,
  getters,
  mutations,
  actions
);

export default store;
