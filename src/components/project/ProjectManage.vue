<template>
  <div class="module-box">
    <div class="form-group-item">
      <el-button type="primary" @click="createProject">创建项目</el-button>
      <el-button type="primary" @click="php">创建项目</el-button>
      <!--搜索栏-->
      <el-row class="header-from">
        <el-input v-model="input" placeholder="搜索个人项目" class="search-ipt"></el-input>
        <el-button icon="el-icon-search" circle class="search-btn"></el-button>
      </el-row>
    </div>
    <!--项目卡片渲染-->
    <ul class="card-list">
      <li class="card-item">
        <a>
          <img class="card-img" src="../../assets/img/card-img.jpg">
          <p class="card-name">项目名</p>
        </a>
      </li>
    </ul>
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
      },
      php:function () {
        this.axios.post('/api/corlex/src/php/index.php')
          .then(response => {
            console.log(response);
          })
          .catch(err => {
            console.log(err);
          });
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
    transition: .4s;
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
  .card-item{
    cursor: pointer;
    border-radius: 5px;
    width: 240px;
    height: 240px;
    list-style: none;
    background: #fff;
    float: left;
    margin-right: 50px;
    position: relative;
    text-align: center;
    overflow: hidden;
    transition: all .4s ease 0s;
  }
  .card-item:hover{
    box-shadow: 0 15px 15px 0 rgba(15, 37, 64, 0.10);
  }
  .card-item .card-img{
    width: 240px;
    height: 180px;
    transition: .4s;
  }
  .card-item .card-img:hover{
    opacity: .9;
  }
  .card-item p{
    font-size: 14px;
    line-height: 50px;
    margin: 0;
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
