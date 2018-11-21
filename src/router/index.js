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
          icon: 'el-icon-refresh',
          path: '/ProjectManage',
          name: '所有项目',
          component: ProjectManage
        },
        {
          icon: 'el-icon-refresh',
          path: '/TaskCreate',
          name: '新建开发任务',
          component: TaskCreate
        }
      ]
    },
    {
      path: '/',
      component: Home,
      name: '知识共享',
      icon: 'el-icon-menu',
      children: [
        {
          icon: 'el-icon-refresh',
          path: '/ProjectManage',
          name: '所有项目',
          component: ProjectManage
        },
        {
          icon: 'el-icon-refresh',
          path: '/TaskManage',
          name: '开发任务',
          component: TaskManage
        }
      ]
    },
    {
      path: '/',
      component: Home,
      name: '日程安排',
      icon: 'el-icon-menu',
      children: [
        {
          icon: 'el-icon-refresh',
          path: '/ProjectManage',
          name: '所有项目',
          component: ProjectManage
        },
        {
          icon: 'el-icon-refresh',
          path: '/TaskManage',
          name: '开发任务',
          component: TaskManage
        }
      ]
    }
  ]
})

