import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/Home.vue'
import ProjectManage from '../components/project/ProjectManage.vue'

import TaskCreate from '../components/project/TaskCreate.vue'
import TaskManage from '../components/project/item/TaskManage.vue'

import DocManage from '../components/doc/DocManage.vue'
import DocCreate from '../components/doc/DocCreate.vue'

import MeetManage from '../components/meet/MeetManage.vue'
import MeetCreate from '../components/meet/MeetCreate.vue'

import DevManage from '../components/dev/DevManage.vue'
import DevCreate from '../components/dev/DevCreate.vue'

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
          component: ProjectManage,
        },
        {
          icon: 'el-icon-edit-outline',
          path: '/TaskCreate',
          name: '创建任务',
          component: TaskCreate
        },
        {
          icon: 'el-icon-edit-outline',
          path: '/TaskManage',
          name: '任务查看',
          component: TaskManage
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
          path: '/DocManage',
          name: '文档阅读',
          component: DocManage
        },
        {
          icon: 'el-icon-edit',
          path: '/DocCreate',
          name: '写文档',
          component: DocCreate
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
          icon: 'el-icon-time',
          path: '/MeetManage',
          name: '查看日程',
          component: MeetManage
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
          path: '/DevManage',
          name: '查看人员',
          component: DevManage
        },
        {
          icon: 'el-icon-time',
          path: '/DevCreate',
          name: '创建人员',
          component: DevCreate
        }
      ]
    },
    {
      path: '/',
      component: Home,
      name: '团队管理',
      icon: 'el-icon-service',
      children: [
        {
          icon: 'el-icon-bell',
          path: '/DevManage',
          name: '查看团队',
          component: DevManage
        },
        {
          icon: 'el-icon-time',
          path: '/DevCreate',
          name: '创建团队',
          component: DevCreate
        }
      ]
    }
  ]
})

