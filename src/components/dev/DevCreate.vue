<template>
  <div class="module-box">
    <el-form :model="form" :rules="rules" ref="form" label-width="100px">
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
          <el-option v-for="item in this.$store.state.positionItem" :label="item.position" :value="item.value"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit('form')">立即创建</el-button>
        <el-button @click="resetForm('form')">重置</el-button>
      </el-form-item>
    </el-form>
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
    name: 'CreateDev',
    data() {
      return {
        form: {
          name: '',
          sex: 0,
          uid: '',
          tel:'',
          email:'',
          position:'',
        },
        rules: {
          name: [
            { required: true, message: '请输入姓名', trigger: 'blur' },
          ],
          uid: [
            { required: true, trigger: 'blur', validator: isUid }
          ],
          tel: [
            { required: true, trigger: 'blur', validator: isPhone }
          ],
          email: [
            { required: true, trigger: 'blur', validator: isEmail }
          ],
          position: [
            { required: true, message: '请选择职位', trigger: 'change' }
          ],
        },
      };
    },
    mounted:function(){
      this.$nextTick(function(){
        // 获取职位列表
        this.axios({
          method:'post',
          url:'/api/corlex-backstage/model/project/getItem.jsp',
        }).then(response => {
          let res = response.data;
          this.$store.commit("changeProjectItem", res.projectItem);
          this.$store.commit("changeHrItem", res.hrItem);
        }).catch(err => {
          this.$notify({
            title: '失败',
            message: '网络错误',
            type: 'error'
          });
        });
      });
    },
    methods: {
      onSubmit:function(formName){
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // 发送数据
            this.axios({
              method:'post',
              headers:{
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
              },
              url:'/api/corlex-backstage/model/project/createTask.jsp',
              //模使用qs拟表单POST请求
              data:qs.stringify({
                task:this.form.task,
                pid:this.form.pid,
                create:this.form.create,
                manager:this.form.manager,
                dateCreate:this.form.dateCreate,
                dateEnd:this.form.dateEnd,
                remark:this.form.remark,
              })
            }).then(response => {
              let res = response.data;
              this.$message(res.msg);
            }).catch(err => {
              this.$message('网络错误');
            });
          } else {
            this.$message('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style scoped>
  .module-box{
    width: 350px;
    margin: 0 auto;
    padding: 50px;
    background: #fff;
    border-radius: 5px;
    box-shadow: 0 15px 15px 0 rgba(15, 37, 64, 0.1);
  }
  .el-form-item{
    text-align: left;
  }
  .el-input{
    width: 200px;
    float: left;
  }
  .el-select{
    float: left;
    width: 200px;
  }
  .el-col{
    width: 200px;
  }
  .el-button{
    float: left;
  }
</style>
