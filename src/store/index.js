import Vue from 'vue'
import Vuex from 'vuex';
Vue.use(Vuex);

const state = {
  projectId: 'A10001',
  projectItem: [],
  hrItem: [],
  posotionItem: [],
}

const mutations = {
  changeProjectId(state, str){
    state.projectId = str;
  },
  changeProjectItem(state,str){
    state.projectItem = str;
  },
  changeHrItem(state,str){
    state.hrItem = str;
  },
  changePositionItem(state,str){
    state.positionItem = str;
  }
}

const store = new Vuex.Store({
  state: state,
  mutations: mutations
})

export default store;
