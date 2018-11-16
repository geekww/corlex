<template>
  <div class="module-box">
    <div class="form-group-item">
      <el-button type="primary" @click="createProject">创建项目</el-button>
      <!--搜索栏-->
      <el-row class="header-from">
        <el-input v-model="input" placeholder="搜索个人项目" class="search-ipt"></el-input>
        <el-button icon="el-icon-search" circle class="search-btn"></el-button>
      </el-row>
    </div>
    <div>
      <el-row :gutter="12">
        <el-col :span="8">
          <el-card shadow="hover">
            鼠标悬浮时显示
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card shadow="hover">
            鼠标悬浮时显示
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card shadow="hover">
            鼠标悬浮时显示
          </el-card>
        </el-col>
      </el-row>
    </div>

    <!--<el-table :data="view" style="width: 100%">-->
      <!--<el-table-column label="项目编号" prop="pid"></el-table-column>-->
      <!--<el-table-column label="项目名称" prop="name"></el-table-column>-->
      <!--<el-table-column label="负责人" prop="agent"></el-table-column>-->

      <!--<el-table-column type="expand">-->
        <!--<template slot-scope="props">-->
          <!--<el-form label-position="left" inline class="demo-table-expand">-->
            <!--<el-form-item label="项目编号：">-->
              <!--<span>{{ props.row.pid }}</span>-->
            <!--</el-form-item>-->
            <!--<el-form-item label="项目名称：">-->
              <!--<span>{{ props.row.name }}</span>-->
            <!--</el-form-item>-->
            <!--<el-form-item label="负责人：">-->
              <!--<span>{{ props.row.agent }}</span>-->
            <!--</el-form-item>-->
            <!--<el-form-item label="创建日期：">-->
              <!--<span>{{ props.row.date }}</span>-->
            <!--</el-form-item>-->
            <!--<el-form-item label="描述：">-->
              <!--<span>{{ props.row.desc }}</span>-->
            <!--</el-form-item>-->
          <!--</el-form>-->
        <!--</template>-->
      <!--</el-table-column>-->
    <!--</el-table>-->
    <!--创建项目弹窗-->
    <el-dialog title="创建项目" :visible.sync="dialogCreateProjectVisible" center width="600px">
      <ProjectCreate></ProjectCreate>
    </el-dialog>
  </div>
</template>

<script>
  import ProjectCreate from './ProjectCreate.vue'

  export default {
    components:{ProjectCreate},
    name: 'RepairProject',
    data() {
      return {
        view: [{
          pid: 'A10001',
          name: '松霖家居项目管理系统',
          agent: 'corlex',
          date: '2018-11-17',
          desc: '本系统适用于松霖商城、松霖OA系统、松霖CRM系统的管理',
        }],
        dialogCreateProjectVisible: false
      }
    },
    methods:{
      createProject:function () {
        this.dialogCreateProjectVisible = true;
      }
    }
  }
</script>

<style scoped>
  .module-box{
    /*width: 700px;*/
    /*background: #fff;*/
    /*padding: 30px 60px;*/
    /*box-shadow:0 5px 20px #E4E8EE;*/
    /*border-radius:12px;*/
    animation: fadein .4s;
    /*margin: 10px auto;*/
  }
  @keyframes fadein
  {
    from {opacity: 0}
    to {opacity: 1}
  }
  .el-button{
    float: left;
    margin-bottom: 20px;
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
  .form-group-item{
    overflow: hidden;
  }
  .el-card{
    cursor: pointer;
    border-radius: 10px;
    width: 240px;
    height: 240px;
  }
  .el-card:hover{
    box-shadow:0 10px 15px #E4E8EE;
  }
  .el-col-8{
    width: 290px;
  }
  .header-from{
    right: 30px;
    top: 80px;
    position: absolute;
  }
  .header-from .search-ipt{
    float: left;
    width: 150px;
    border-radius: 50px;
    overflow: hidden;
    border-left: 1px solid #dcdfe6;
    border-right: 1px solid #dcdfe6;
  }
  .header-from .search-btn{
    float: left;
    margin-left: 10px;
  }
</style>
