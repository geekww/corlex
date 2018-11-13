import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/Home.vue'
import CreateProject from '../components/CreateProject.vue'
import CreateTask from '../components/CreateTask.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
      name: '项目管理',
      children: [
        { path: '/CreateProject', name: '创建项目', component: CreateProject},
      ]
    },
    {
      path: '/',
      component: Home,
      name: '任务管理',
      children: [
        { path: '/CreateTask', name: '创建任务', component: CreateTask},
      ]
    }
  ]
})

