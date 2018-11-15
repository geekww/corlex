<template>
  <el-container class="main-box">
    <!--头部导航栏-->
    <el-header>
      <Header></Header>
    </el-header>

    <!--侧边栏及主体-->
    <el-container>
      <!--侧边栏-->
      <el-aside width="240px">
        <SideBar></SideBar>
      </el-aside>

      <!--内容主体-->
      <el-container>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
  import Header from './Header.vue'
  import SideBar from './SideBar.vue'

  export default {
    components:{Header,SideBar},
    name: 'Home'
  }
</script>

<style scoped>
  .main-box{
    background: #EFEFEF;
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
  }
  .el-header {
    color: #fff;
    text-align: center;
    line-height: 60px;
    width: 100%;
    padding: 0;
    box-shadow: 0 0 5px rgba(57,70,78,.2);
    background: #fff;
  }
  .el-aside {
    text-align: center;
    line-height: 200px;
    background: #fff;
    box-shadow: 0 0 5px rgba(57,70,78,.2);
  }
  .el-aside .el-menu{
    border-right: none;
  }
</style>
