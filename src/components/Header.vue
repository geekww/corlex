<template>
  <div class="header-bar">
    <!--logo-->
    <div class="header-logo">Corlex</div>
    <!--跳转按钮-->
    <el-tabs v-model="activeName" @tab-click="handleClick" class="header-tab">
      <el-tab-pane label="仪表盘" name="first"></el-tab-pane>
    </el-tabs>
    <!--搜索栏-->
    <el-row class="header-from">
      <el-input v-model="input" placeholder="搜索" class="search-ipt"></el-input>
      <el-button icon="el-icon-search" circle class="search-btn"></el-button>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'Header'
  }
</script>

<style scoped>
  .header-logo{
    font-size: 30px;
    float: left;
    width: 200px;
    text-align: center;
    font-weight:bold;
    background: linear-gradient(#5C6EC4,#3D86D8);
    cursor: pointer;
  }
  .header-tab{
    margin-left: 30px;
    float: left;
  }
  .header-from{
    right: 30px;
    top: 0;
    position: absolute;
  }
  .header-from .search-ipt{
    float: left;
    width: 150px;
  }
  .header-from .search-btn{
    float: left;
    margin-left: 10px;
    margin-top: 10px;
  }
</style>
