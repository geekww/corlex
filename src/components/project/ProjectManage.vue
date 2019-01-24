<template>
  <div class="module-box">
    <div class="form-group-item">
      <el-button type="primary" @click="createProject">创建项目</el-button>
    </div>
    <!--项目卡片渲染-->
    <ul class="card-list">
      <li class="card-item" v-for="item in projectItem">
        <a @click="changeProjectId(item.pid)">
          <!--<router-link :to="children.TaskManage">-->
          <!--<a>-->
          <img class="card-img" src="../../assets/img/card-img.jpg">
          <p class="card-name">{{item.name}}</p>
          <!--</a>-->
          <!--</router-link>-->
        </a>
      </li>
    </ul>
    <!--创建项目弹窗-->
    <el-dialog title="创建项目" :visible.sync="dialogProjectCreateVisible" center width="600px">
      <ProjectCreate></ProjectCreate>
    </el-dialog>
    <!--任务展示-->
    <el-dialog title="任务展示" :visible.sync="dialogTaskManageVisible" center width="600px">
      <TaskManage></TaskManage>
    </el-dialog>
  </div>
</template>

<script>
  import Vue from 'vue'

  import Router from 'vue-router'
  Vue.use(Router)
  import {mapState,mapGetters,mapActions} from 'vuex';
  import ProjectCreate from './ProjectCreate.vue'
  import TaskManage from './item/TaskManage.vue'

  export default{
    components:{ProjectCreate,TaskManage},
    name: 'ProjectManage',
    data() {
      return {
        projectItem: [],
        dialogProjectCreateVisible: false,
        dialogTaskManageVisible: false
      }
    },
    mounted:function(){
      this.$nextTick(function(){
        this.axios.post('/api/corlex/project/getProject')
          .then(response => {
            let res = response.data;
            //渲染卡片
            this.projectItem = res.data;

          })
          .catch(err => {
            console.log(err);
          });
      });
    },
    methods:{
      // 显示创建页面
      createProject:function () {
        this.dialogProjectCreateVisible = true;
      },
      // 路由跳转、改变state中projectId值
      changeProjectId(pid){
        this.$store.commit("changeProjectId", pid);
        this.$router.push({
          path:'TaskManage'
        });
        // 跳转并传值：this.$router.push({path:'xxx',params:{id:'123'});
        // 取值：this.$route.params.id ;
      },
    },
    computed:{
      // msg(){
      //   return this.$store.state.childText;
      // }
    },
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
</style>
