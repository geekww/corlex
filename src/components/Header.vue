<template>
  <el-header>
    <div class="logo-title">Corlex</div>
    <el-input v-model="input" placeholder="请输入内容" class="search-ipt"></el-input>
    <el-button type="primary" icon="el-icon-search" class="search-btn">搜索</el-button>
  </el-header>
</template>
<script>
  export default {
    name: 'Header',
  }
</script>
<style scoped>
  .el-header, .el-footer {
    background-color: #23262E;
    color: #fff;
    text-align: center;
    line-height: 60px;
    width: 100%;
  }
  .logo-title{
    font-size: 30px;
    float: left;
    width: 200px;
    text-align: center;
  }
  .search-ipt{
    float: left;
    width: 100px;
  }
  .search-btn{
    float: left;
    width: 100px;
    margin-left: 30px;
    margin-top: 10px;
  }
</style>
