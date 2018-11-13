<template>
  <el-menu :default-openeds="['1']">
    <el-submenu index="1">
      <template slot="title"><i class="el-icon-menu"></i>项目管理</template>
      <el-menu-item index="1-1"><router-link to="/CreateProject">创建项目</router-link></el-menu-item>
      <el-menu-item index="1-2">选项2</el-menu-item>
    </el-submenu>
    <el-submenu index="2">
      <template slot="title"><i class="el-icon-tickets"></i>任务管理</template>
      <el-menu-item index="2-1"><router-link to="/CreateTask">创建任务</router-link></el-menu-item>
      <el-menu-item index="2-2">选项2</el-menu-item>
    </el-submenu>
    <el-submenu index="3">
      <template slot="title"><i class="el-icon-news"></i>人员管理</template>
      <el-menu-item index="3-1">选项1</el-menu-item>
      <el-menu-item index="3-2">选项2</el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
  export default {
    name: 'SideBar'
  }
</script>

<style scoped>

</style>
