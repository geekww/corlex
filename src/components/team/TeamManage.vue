<template>
  <div class="module-box">
    <div class="form-group">
      <!--<el-button type="primary" class="corlex-btn" @click="addPositionDialog = true">新增职位</el-button>-->
      <!--<el-button type="primary" class="corlex-btn" @click="addGroupDialog = true">新增组别</el-button>-->
      <el-button type="primary" class="corlex-btn" @click="addTeamDialog = true">新增团队</el-button>
    </div>

    <div class="main-content">
      <el-card class="position-card" v-loading="loading">
        <div slot="header" class="clearfix">
          <span>在编岗位</span>
          <el-button icon="el-icon-plus" style="float: right; padding: 3px 0;" type="text" @click="addPositionDialog = true">新增职位</el-button>
        </div>
        <ul class="position-list" v-for="item in form.positionItem">
          <li class="position-item">
            {{item.position}}
            <el-button style="float: right; padding: 3px 0" type="text" @click="delPosition(item.pid)">删除</el-button>
          </li>
        </ul>
      </el-card>
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

    <!--新增团队弹窗-->
    <el-dialog title="创建团队" :visible.sync="addTeamDialog" width="800px">
      <el-steps :active="active" align-center finish-status="success">
        <el-step title="填写团队信息"></el-step>
        <el-step title="选择团队成员"></el-step>
        <el-step title="确认团队信息"></el-step>
      </el-steps>

      <!--第一步-->
      <el-form label-width="100px" v-if="active === 0" style="margin-top: 50px">
        <el-form-item label="选择项目：">
          <el-select v-model="team.project" placeholder="请选择">
            <el-option v-for="item in team.projectItem" :key="item.pid" :label="item.name" :value="item.pid"></el-option>
          </el-select>
        </el-form-item>
        <el-button style="margin-top: 12px;" @click="stepOne_next">下一步</el-button>
      </el-form>

      <!--第二步-->
      <el-form label-width="100px" v-if="active === 1" style="margin-top: 50px">
        <el-form-item label="UI设计：">
          <el-select v-model="team.uiDesign" multiple placeholder="请选择">
            <el-option v-for="item in team.options" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="前端开发：">
          <el-select v-model="team.webDev" multiple placeholder="请选择">
            <el-option v-for="item in team.options" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="后端开发：">
          <el-select v-model="team.backDev" multiple placeholder="请选择">
            <el-option v-for="item in team.options" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="系统测试：" prop="name">
          <el-select v-model="team.testDev" multiple placeholder="请选择">
            <el-option v-for="item in team.options" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </el-form-item>
        <el-button style="margin-top: 12px;" @click="stepTwo_last">上一步</el-button>
        <el-button style="margin-top: 12px;" @click="stepTwo_next">下一步</el-button>
      </el-form>

      <!--第三步-->
      <el-form label-width="100px" v-if="active === 2" style="margin-top: 50px">
        <el-form-item label="团队名：" prop="name">
          <el-input v-model="team.name" placeholder="请输入姓名"></el-input>
        </el-form-item>
        <el-button style="margin-top: 12px;" @click="finish">立即创建</el-button>
      </el-form>

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
          positionItem:[],
        },
        team: {
          project:'',
          projectItem:[],
          options: [
            {
              value: '选项1',
              label: '黄金糕'
            }
          ],
          uiDesign:[],
          webDev:[],
          backDev:[],
          testDev:[],
        },
        active:0,
        addPositionDialog: false,
        addGroupDialog: false,
        addTeamDialog: false,
        loading: true,
      }
    },
    mounted:function(){
      this.$nextTick(function(){
        this.getPositionInfo();
        this.getProject();
      });
    },
    methods:{
      getProject:function(){
        this.axios.post('/api/corlex/project/getProject')
          .then(response => {
            let res = response.data;
            //渲染项目
            this.team.projectItem = res.data;

          }).catch(err => {
          console.log(err);
        });
      },
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

          this.getPositionInfo();

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
      getPositionInfo:function () {
        this.loading = true;
        // 获取职位列表
        this.axios({
          method:'post',
          url:'/api/corlex/position/getPosition',
        }).then(response => {
          let res = response.data;
          this.form.positionItem = res.data;

          this.loading = false;

          // 强制更新UI
          this.$forceUpdate();
        }).catch(err => {
          this.$notify({
            title: '失败',
            message: '网络错误',
            type: 'error'
          });
        });
      },
      delPosition:function (pid) {
        this.$confirm('确认删除？').then(_ => {
          this.axios({
            method:'post',
            headers:{
              'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            },
            url:'/api/corlex/position/delPosition',
            //模使用qs拟表单POST请求
            data:qs.stringify({
              pid:pid,
            })
          }).then(response => {
            let res = response.data;
            this.$message(res.msg);

            this.getPositionInfo();
          }).catch(err => {
            this.$message('网络错误');
          });
        }).catch(_ => {

        });
      },
      stepOne_next:function () {
        if(!this.team.project){
          this.$message('请选择项目');
          return false;
        }
        this.active = 1;
      },
      stepTwo_next:function () {
        if(!this.team.uiDesign.length >0){
          this.$message('请选择UI设计师');
          return false;
        }
        if(!this.team.webDev.length >0){
          this.$message('请选择前端工程师');
          return false;
        }
        if(!this.team.backDev.length >0){
          this.$message('请选择后端工程师');
          return false;
        }
        if(!this.team.testDev.length >0){
          this.$message('请选择测试工程师');
          return false;
        }
        this.active = 2;
      },
      stepTwo_last() {
        this.active = 0;
      },
      finish:function () {
        this.active = 0;
      }
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

  .form-group{
    overflow: auto;
    margin-bottom: 30px;
  }
  .main-content{

  }
  /*在编职位*/
  .position-card {
    width: 380px;
    text-align: left;
  }
  .position-card .position-list {
    list-style: none;
    margin-left: -30px;
  }
  .position-card .position-item {
    margin-bottom: 18px;
    font-size: 15px;
  }
  .el-form{
    width: 240px;
    margin: 0 auto;
  }
  .el-form-item{
    margin-left: -100px;
  }
</style>
