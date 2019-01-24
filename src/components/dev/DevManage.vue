<template>
  <div class="model-box">
    <div class="form-group">
      <el-button type="primary" class="corlex-btn" @click="addUserDialog = true">新增人员</el-button>
    </div>

    <div class="user-box" v-loading="loading">
      <h1 class="table-title">在职人员</h1>
      <el-table :data="userData" border class="user-table">
        <el-table-column fixed prop="name" label="姓名" width="100"></el-table-column>
        <el-table-column fixed prop="sex" label="性别" width="80"></el-table-column>
        <el-table-column fixed prop="uid" label="工号" width="100"></el-table-column>
        <el-table-column fixed prop="tel" label="电话" width="130"></el-table-column>
        <el-table-column fixed prop="email" label="邮箱" width="200"></el-table-column>
        <el-table-column fixed prop="position" label="岗位" width="150"></el-table-column>
        <el-table-column fixed="right" label="操作" width="100">
          <template slot-scope="scope">
            <el-button type="text" @click="showEditDialog(scope.row)" size="small">编辑</el-button>
            <el-button type="text" @click="delClick(scope.row)" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <!--新增职位弹窗-->
    <el-dialog title="增加人员" :visible.sync="addUserDialog" width="430px">
      <el-form :model="form" :rules="rules" ref="form" label-width="100px" class="form-group">
        <el-form-item label="姓名：" prop="name">
          <el-input v-model="form.name" placeholder="请输入姓名"></el-input>
        </el-form-item>
        <el-form-item label="性别：" prop="sex">
          <el-radio-group v-model="form.sex">
            <el-radio :label="0">男</el-radio>
            <el-radio :label="1">女</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="工号：" prop="uid">
          <el-input v-model="form.uid" placeholder="请输入工号" maxlength="5"></el-input>
        </el-form-item>
        <el-form-item label="联系方式：" prop="tel">
          <el-input v-model="form.tel" placeholder="请输入联系方式" maxlength="11"></el-input>
        </el-form-item>
        <el-form-item label="邮箱：" prop="email">
          <el-input v-model="form.email" placeholder="请输入邮箱地址"></el-input>
        </el-form-item>
        <el-form-item label="职位：" prop="position">
          <el-select v-model="form.position" placeholder="请选择职位">
            <el-option v-for="item in this.form.positionItem" :label="item.position" :value="item.pid"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="addUser('form')">立即创建</el-button>
          <el-button @click="resetForm('form')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
    <!--编辑人员弹窗-->
    <el-dialog title="编辑人员" :visible.sync="editUserDialog" width="430px">
      <el-form :model="form" :rules="rules" ref="form" label-width="100px" class="form-group">
        <el-form-item label="职位：" prop="position">
          <el-select v-model="form.position" placeholder="请选择职位">
            <el-option v-for="item in this.form.positionItem" :label="item.position" :value="item.pid"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="邮箱：" prop="email">
          <el-input v-model="form.email" placeholder="请输入邮箱地址"></el-input>
        </el-form-item>
        <el-form-item label="联系方式：" prop="tel">
          <el-input v-model="form.tel" placeholder="请输入联系方式" maxlength="11"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="updateUserInfo()">更新</el-button>
          <el-button @click="resetForm('form')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
  import qs from 'qs'

  //手机号验证
  const isPhone=(rule, value,callback)=>{
    let reg = /^1[3|4|5|7|8][0-9]\d{8}$/;
    if (!value){
      callback(new Error('请输入电话号码'));
    }else  if (!reg.test(value)){
      callback(new Error('请输入正确的11位手机号码'));
    }else {
      callback();
    }
  }
  //工号验证
  const isUid=(rule, value,callback)=>{
    let reg = /^\d{5}$/;
    if (!value){
      callback(new Error('请输入工号'));
    }else  if (!reg.test(value)){
      callback(new Error('请输入正确的5位工号'));
    }else {
      callback();
    }
  }
  //邮箱验证
  const isEmail=(rule, value,callback)=>{
    let reg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
    if (!value){
      callback(new Error('请输入邮箱'));
    }else  if (!reg.test(value)){
      callback(new Error('请输入正确的邮箱'));
    }else {
      callback();
    }
  }
  export default {
    data() {
      return {
        form: {
          name: '',
          sex: 0,
          uid: '',
          tel: '',
          email: '',
          position: '',
          positionItem: [],
        },
        rules: {
          name: [
            {required: true, message: '请输入姓名', trigger: 'blur'},
          ],
          uid: [
            {required: true, trigger: 'blur', validator: isUid}
          ],
          tel: [
            {required: true, trigger: 'blur', validator: isPhone}
          ],
          email: [
            {required: true, trigger: 'blur', validator: isEmail}
          ],
          position: [
            {required: true, message: '请选择职位', trigger: 'change'}
          ],
        },
        userData: [],
        addUserDialog: false,
        editUserDialog: false,
        loading: true,
        rowUid:''
      }
    },
    mounted:function(){
      this.$nextTick(function(){
        // 初始化人员列表
        this.getUserInfo();
        // 初始化职位列表
        this.getPositionInfo();
      });
    },
    methods: {
      getUserInfo:function () {
        // 获取人员列表
        this.loading = true;
        this.axios({
          method:'post',
          url:'/api/corlex/user/getUser',
        }).then(response => {
          let res = response.data;
          this.userData = res.data;
          // 强制更新UI
          this.$forceUpdate();
          this.loading = false;
        }).catch(err => {
          this.$notify({
            title: '失败',
            message: '网络错误',
            type: 'error'
          });
        });
      },
      getPositionInfo:function () {
        // 获取职位列表
        this.axios({
          method:'post',
          url:'/api/corlex/position/getPosition',
        }).then(response => {
          let res = response.data;
          this.form.positionItem = res.data;

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
      addUser:function(formName){
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // 发送数据
            this.axios({
              method:'post',
              headers:{
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
              },
              url:'/api/corlex/user/addUser',
              //模使用qs拟表单POST请求
              data:qs.stringify({
                name:this.form.name,
                sex:this.form.sex,
                uid:this.form.uid,
                tel:this.form.tel,
                email:this.form.email,
                position:this.form.position,
              })
            }).then(response => {
              let res = response.data;
              this.$message(res.msg);
              this.addUserDialog = false;

              // 重新获取人员
              this.loading = true;
              this.axios({
                method:'post',
                url:'/api/corlex/user/getUser',
              }).then(response => {
                let res = response.data;
                this.userData = res.data;
                // 强制更新UI
                this.$forceUpdate();
                this.loading = false;
              }).catch(err => {
                this.$notify({
                  title: '失败',
                  message: '网络错误',
                  type: 'error'
                });
              });
            }).catch(err => {
              this.$message('网络错误');
            });
          } else {
            this.$message('请填写信息');
            return false;
          }
        });
      },
      delClick(row) {
        this.axios({
          method:'post',
          headers:{
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
          },
          url:'/api/corlex/user/delUser',
          data:qs.stringify({
            uid:row.uid,
          })
        }).then(response => {
          let res = response.data;
          this.$message(res.msg);
          if(res.status ===1){
            // 重新获取人员
            this.getUserInfo();
          }
        }).catch(err => {
          this.$message('网络错误');
        });
      },
      showEditDialog:function(row){
        this.editUserDialog = true;
        this.form.uid = row.uid;
        this.form.tel = row.tel;
        this.form.email = row.email;
        this.form.position = row.position;
      },
      updateUserInfo:function() {
        this.axios({
          method:'post',
          headers:{
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
          },
          url:'/api/corlex/user/UpdateUser',
          data:qs.stringify({
            uid:this.form.uid,
            tel:this.form.tel,
            email:this.form.email,
            position:this.form.position,
          })
        }).then(response => {
          let res = response.data;
          this.$message(res.msg);
          if(res.status ===1){
            this.editUserDialog = false;
            // 重新获取人员
            this.getUserInfo();
          }
        }).catch(err => {
          this.$message('网络错误');
        });
      }
    },
  }
</script>

<style scoped>
  .form-group{
    overflow: auto;
  }
  .corlex-btn{
    float: left;
    margin-bottom: 20px;
    transition: .4s;
  }
  .table-title{
    padding-top: 30px;
    text-align: left;
  }
  .user-box{
    width: 80%;
    margin: 30px auto;
    padding: 0 50px 50px;
    border-radius: 5px;
    background: #fff;
    box-shadow: 0 15px 15px 0 rgba(15, 37, 64, 0.1);
  }
  .form-group{
    width: 350px;
  }
  .el-form-item{
    text-align: left;
  }
  .el-input{
    width: 250px;
    float: left;
  }
  .el-select{
    float: left;
    width: 250px;
  }
  .el-col{
    width: 250px;
  }
  .el-button{
    float: left;
  }
</style>
