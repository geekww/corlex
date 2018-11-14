import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/Home.vue'
import RepairProject from '../components/project/RepairProject.vue'
import CreateProject from '../components/project/CreateProject.vue'

import RepairTask from '../components/task/RepairTask.vue'
import CreateTask from '../components/task/CreateTask.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
      name: '项目管理',
      icon: 'el-icon-menu',
      children: [
        {
          icon: 'el-icon-refresh',
          path: '/RepairProject',
          name: '项目维护',
          component: RepairProject
        },
        {
          icon: 'el-icon-plus',
          path: '/CreateProject',
          name: '项目创建',
          component: CreateProject
        },
      ]
    },
    {
      path: '/',
      component: Home,
      name: '任务管理',
      icon: 'el-icon-tickets',
      children: [
        {
          icon: 'el-icon-refresh',
          path: '/RepairTask',
          name: '任务维护',
          component: RepairTask
        },
        {
          icon: 'el-icon-plus',
          path: '/CreateTask',
          name: '任务创建',
          component: CreateTask
        },
      ]
    },
    {
      path: '/',
      component: Home,
      name: '人员管理',
      icon: 'el-icon-service',
      children: [
        {
          icon: 'el-icon-refresh',
          path: '/RepairTask',
          name: '人员维护',
          component: RepairTask
        },
        {
          icon: 'el-icon-plus',
          path: '/CreateTask',
          name: '人员创建',
          component: CreateTask
        },
      ]
    }
  ]
})

