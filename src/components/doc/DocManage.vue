<template>
  <div class="doc-box">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>文章标题</span>
      </div>
      <div class="text item">
        内容
      </div>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: 'DocManage'
  }
</script>

<style scoped>
  .text {
    font-size: 14px;
    text-align: left;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 1000px;
    height: 300px;
    margin: 20px auto 50px;
    text-align: left;
    cursor: pointer;
  }
</style>
