<template>
  <el-menu>
    <!--侧边栏列表渲染-->
    <el-submenu :index="index" v-for="(item,index) in $router.options.routes">
      <template slot="title"><i :class="item.icon"></i>{{item.name}}</template>
      <el-menu-item :index="index+'-'+cIndex" v-for="(children,cIndex) in item.children">
        <router-link :to="children.path"><i :class="children.icon"></i>{{children.name}}</router-link>
      </el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
  export default {
    name: 'SideBar'
  }
</script>

<style scoped>
  .el-menu-item{
    padding: 0!important;
  }
  .el-menu-item a{
    text-align: left;
    margin-left: 80px;
    font-size: 13px;
  }
  .el-menu-item.is-active{
    background: #ecf5ff;
  }
</style>
