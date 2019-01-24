<template>
  <div class="module-box">
    <div class="form-group-item">
      <el-button type="primary" class="corlex-btn" @click="addPositionDialog = true">新增职位</el-button>
      <el-button type="primary" class="corlex-btn" @click="addGroupDialog = true">新增组别</el-button>
      <el-button type="primary" class="corlex-btn" @click="addTeamDialog = true">新增团队</el-button>
    </div>

    <!--新增职位弹窗-->
    <el-dialog title="增加职位" :visible.sync="addPositionDialog" width="400px">
      <el-input v-model="form.position" placeholder="请输入职位"></el-input>
      <div slot="footer" class="dialog-footer">
        <el-button @click="addPositionDialog = false">取 消</el-button>
        <el-button type="primary" @click="addPosition()">确 定</el-button>
      </div>
    </el-dialog>

    <!--新增组别弹窗-->
    <el-dialog title="增加组别" :visible.sync="addGroupDialog" width="400px">
      <el-input v-model="form.group" placeholder="请输入组别"></el-input>
      <div slot="footer" class="dialog-footer">
        <el-button @click="addGroupDialog = false">取 消</el-button>
        <el-button type="primary" @click="addGroup()">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import qs from 'qs'
  export default{
    name: 'ProjectManage',
    data() {
      return {
        form: {
          position:'',
          group:'',
        },
        addPositionDialog: false,
        addGroupDialog: false,
        addTeamDialog: false
      }
    },
    // mounted:function(){
    //   this.$nextTick(function(){
    //     this.axios.post('/api/corlex/project/getProject')
    //       .then(response => {
    //         let res = response.data;
    //         //渲染卡片
    //         this.projectItem = res.data;
    //
    //       })
    //       .catch(err => {
    //         console.log(err);
    //       });
    //   });
    // },
    methods:{
      addPosition:function(){
        if(!this.form.position){
          this.$message('请输入岗位名称');
          return false;
        }

        this.axios({
          method:'post',
          headers:{
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
          },
          url:'/api/corlex/position/addPosition',
          //模使用qs拟表单POST请求
          data:qs.stringify({
            position:this.form.position,
          })
        }).then(response => {
          let res = response.data;
          this.$message(res.msg);

          // 关闭弹窗
          this.addPositionDialog = false;
          // 清空变量
          this.form.position = '';
        }).catch(err => {
          this.$message('网络错误');
          // 关闭弹窗
          this.addPositionDialog = false;
        });

      },
      addGroup:function(){
        if(!this.form.group){
          this.$message('请输入组别名');
          return false;
        }

        this.axios({
          method:'post',
          headers:{
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
          },
          url:'/api/corlex/position/addGroup',
          //模使用qs拟表单POST请求
          data:qs.stringify({
            position:this.form.position,
          })
        }).then(response => {
          let res = response.data;
          this.$message(res.msg);

          // 关闭弹窗
          this.addPositionDialog = false;
          // 清空变量
          this.form.position = '';
        }).catch(err => {
          this.$message('网络错误');
          // 关闭弹窗
          this.addPositionDialog = false;
        });

      },
    },
    // computed:{
    //   // msg(){
    //   //   return this.$store.state.childText;
    //   // }
    // },
  }
</script>

<style scoped>
  @keyframes fadein
  {
    from {opacity: 0}
    to {opacity: 1}
  }
  .corlex-btn{
    float: left;
    margin-bottom: 20px;
    transition: .4s;
  }
</style>
