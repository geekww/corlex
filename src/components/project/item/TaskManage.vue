<template>
  <div class="model-box">
    <el-button icon="el-icon-back" class="back" circle @click="backToProjectManage"></el-button>
    <!--<el-table :data="taskData" style="width: 100%">-->
      <!--<el-table-column prop="name" label="任务名"></el-table-column>-->
      <!--<el-table-column prop="creator" label="创建者"></el-table-column>-->
      <!--<el-table-column prop="manager" label="任务负责人"></el-table-column>-->
      <!--<el-table-column prop="date" label="创建时间"></el-table-column>-->
      <!--<el-table-column prop="plane" label="计划完成时间"></el-table-column>-->
      <!--<el-table-column prop="remark" label="任务描述"></el-table-column>-->
    <!--</el-table>-->
    <el-collapse v-for="item in taskData" class="coll-box">
      <el-collapse-item>
        <template slot="title">
          <span class="task-title">
            {{item.name}}
          </span>
          <div class="title-detail">
            <span>负责人：{{item.manager}}</span>
            <span>计划完成：{{item.plane}}</span>
            <span class="state">状态：<span>{{item.state | stateFormatter}}</span></span>
            <i class="header-icon el-icon-edit-outline" @click="editTask(item.id)"></i>
          </div>
        </template>
        <div class="task-remark">{{item.remark}}</div>
        <div class="footer-detail">
          <span>创建人：{{item.creator}}</span>
          <span>实际完成：{{item.finish}}</span>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>

</template>

<script>
  import qs from 'qs'
  import Header from '../../Header.vue'
  import SideBar from '../../SideBar.vue'

  export default {
    components:{Header,SideBar},
    name: 'TaskManage',
    data() {
      return {
        taskData: []
      }
    },
    mounted:function(){
      this.$nextTick(function(){
        this.axios({
          method:'post',
          headers:{
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
          },
          url:'/api/corlex/task/getTask',
          //模使用qs拟表单POST请求
          data:qs.stringify({
            pid:this.$store.state.projectId,
          })
        }).then(response => {
          let res = response.data;
          // 渲染任务列表
          this.taskData = res.data;
        }).catch(err => {
          this.$message('网络错误');
        });
      });
    },
    methods:{
      backToProjectManage(){
        this.$router.push({
          path:'ProjectManage'
        });
      },
    },
    filters: {
      stateFormatter: function (value) {
        return value === '1' ? "待开始" : value === '2' ? "进行中" : "空";
      }
    }
  }
</script>

<style scoped>
  .model-box{
    width: 800px;
    background: #fff;
    padding: 30px 50px;
    animation: fadein .4s;
    margin: 10px auto;
    border-radius: 5px;
    box-shadow: 0 15px 15px 0 rgba(15, 37, 64, 0.1);
    text-align: left;
  }
  @keyframes fadein
  {
    from {opacity: 0}
    to {opacity: 1}
  }
  .back{
    position: fixed;
    left: 300px;
    top: 90px;
  }
  .coll-box *{
    font-size: 14px;
  }
  .task-title{
    width: 300px;
    display: inline-block;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
  .title-detail{
    float: right;
  }
  .title-detail span,.title-detail i,.footer-detail span{
    margin-right: 20px;
  }
  .state span{
    background-color: #ffe28c;
    padding: 2px 4px;
    color: #000;
  }
  .task-remark{
    padding: 20px 20px 0 20px;
    border-top: 1px solid #f1f1f1;
    line-height: 24px;
  }
  .footer-detail{
    text-align: right;
    margin-top: 20px;
  }
</style>
