import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/Home.vue'
import ProjectManage from '../components/project/ProjectManage.vue'

import TaskManage from '../components/project/TaskManage.vue'
import TaskCreate from '../components/project/TaskCreate.vue'

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
          icon: 'el-icon-news',
          path: '/ProjectManage',
          name: '所有项目',
          component: ProjectManage
        },
        {
          icon: 'el-icon-edit-outline',
          path: '/TaskCreate',
          name: '创建任务',
          component: TaskCreate
        }
      ]
    },
    {
      path: '/',
      component: Home,
      name: '知识共享',
      icon: 'el-icon-tickets',
      children: [
        {
          icon: 'el-icon-document',
          path: '/ProjectManage',
          name: '所有文档',
          component: ProjectManage
        },
        {
          icon: 'el-icon-edit',
          path: '/TaskManage',
          name: '文档创作',
          component: TaskManage
        }
      ]
    },
    {
      path: '/',
      component: Home,
      name: '日程安排',
      icon: 'el-icon-date',
      children: [
        {
          icon: 'el-icon-bell',
          path: '/ProjectManage',
          name: '所有会议',
          component: ProjectManage
        },
        {
          icon: 'el-icon-time',
          path: '/TaskManage',
          name: '新建会议',
          component: TaskManage
        }
      ]
    },
    {
      path: '/',
      component: Home,
      name: '人员维护',
      icon: 'el-icon-service',
      children: [
        {
          icon: 'el-icon-bell',
          path: '/ProjectManage',
          name: '所有会议',
          component: ProjectManage
        },
        {
          icon: 'el-icon-time',
          path: '/TaskManage',
          name: '新建会议',
          component: TaskManage
        }
      ]
    }
  ]
})

