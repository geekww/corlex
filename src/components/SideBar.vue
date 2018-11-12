<template>
  <el-aside>
    <el-menu :default-openeds="['1']">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>导航一</template>
        <el-menu-item index="1-1">选项1</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-message"></i>导航二</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
      </el-submenu>
    </el-menu>
  </el-aside>
</template>

<script>
export default {
  name: 'SideBar',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<style scoped>
  .el-aside {
    text-align: center;
    line-height: 200px;
    position: absolute;
    top: 60px;
  }
  .el-submenu{

  }
  .el-submenu__title{
  }
  .el-submenu__title i{
  }
</style>
