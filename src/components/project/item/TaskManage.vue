<template>
  <div class="module-box">
    <el-table :data="taskData" style="width: 100%">
      <el-table-column prop="task" label="任务名"></el-table-column>
      <el-table-column prop="creater" label="创建者"></el-table-column>
      <el-table-column prop="manager" label="任务负责人"></el-table-column>
      <el-table-column prop="dateCreate" label="创建时间"></el-table-column>
      <el-table-column prop="dateEnd" label="计划完成时间"></el-table-column>
      <el-table-column prop="remark" label="任务描述"></el-table-column>
    </el-table>
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
          url:'/api/corlex-backstage/model/project/getTask.jsp',
          //模使用qs拟表单POST请求
          data:qs.stringify({
            pid:this.$store.state.projectId,
          })
        }).then(response => {
          let res = response.data;
          // 渲染任务列表
          this.taskData = res.data;
        }).catch(err => {
          this.$notify({
            title: '失败',
            message: '网络错误',
            type: 'error'
          });
        });
      });
    },
  }
</script>

<style scoped>
  .module-box{
    width: 1000px;
    background: #fff;
    padding: 30px 50px;
    animation: fadein .4s;
    margin: 10px auto;
    border-radius: 5px;
    box-shadow: 0 15px 15px 0 rgba(15, 37, 64, 0.1);
  }
  @keyframes fadein
  {
    from {opacity: 0}
    to {opacity: 1}
  }
</style>
