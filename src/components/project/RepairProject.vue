<template>
  <div class="module-box">
    <el-table :data="view" style="width: 100%">
      <el-table-column label="项目编号" prop="pid"></el-table-column>
      <el-table-column label="项目名称" prop="name"></el-table-column>
      <el-table-column label="描述" prop="desc"></el-table-column>

      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="项目名称：">
              <span>{{ props.row.name }}</span>
            </el-form-item>
            <el-form-item label="负责人：">
              <span>{{ props.row.fzr }}</span>
            </el-form-item>
            <el-form-item label="创建日期：">
              <span>{{ props.row.date }}</span>
            </el-form-item>
            <el-form-item label="描述：">
              <span>{{ props.row.desc }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    name: 'RepairProject',
    data() {
      return {
        view: [{
          pid: '100001',
          name: '松霖家居网上商城',
          fzr: 'corlex',
          date: '2018-11-17',
          desc: '松霖家居网上商城',
        }]
      }
    }
  }
</script>

<style scoped>
  .module-box{
    width: 700px;
    background: #fff;
    padding: 30px 60px;
    box-shadow:0 5px 20px #E4E8EE;
    border-radius:12px;
    animation: fadein .4s;
    margin: 10px auto;
  }
  @keyframes fadein
  {
    from {opacity: 0}
    to {opacity: 1}
  }
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
</style>
