<template>
  <div class="dialog-box">
    <el-form :model="form" :rules="rules" ref="form" label-width="100px">
      <el-form-item label="项目编号：" prop="pid">
        <el-input v-model="form.pid" placeholder="例：A10001" maxlength="6"></el-input>
      </el-form-item>
      <el-form-item label="项目名称：" prop="name">
        <el-input v-model="form.name" placeholder="请输入项目名称" maxlength="30"></el-input>
      </el-form-item>
      <el-form-item label="项目经理：" prop="manager">
        <el-select v-model="form.manager" placeholder="请选择项目经理">
          <el-option v-for="item in this.userItem" :label="item.name" :value="item.uid"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="创建时间：" prop="date">
        <!--<div class="">值：{{ form.date }}</div>-->
        <el-col>
          <el-date-picker type="date" placeholder="选择日期" value-format="yyyy-MM-dd" v-model="form.date" style="width: 100%;"></el-date-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="项目描述：">
        <el-input type="textarea" v-model="form.remark"></el-input>
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
  export default {
    name: 'CreateProject',
    data() {
      return {
        form: {
          pid: '',
          name: '',
          manager: '',
          userItem:[],
          date: '',
          remark: ''
        },
        rules: {
          pid: [
            { required: true, message: '请输入项目编号', trigger: 'blur' },
            { min: 6, max: 6, message: '请输入有效6位数', trigger: 'blur' }
          ],
          name: [
            { required: true, message: '请输入项目名称', trigger: 'blur' },
          ],
          manager: [
            { required: true, message: '请选择项目负责人', trigger: 'change' },
          ],
          date: [
            { required: true, message: '请选择日期', trigger: 'change' }
          ],
        }
      };
    },
    mounted:function(){
      this.$nextTick(function(){
        // 获取人员列表
        this.axios({
          method:'post',
          url:'/api/corlex/user/getUser',
        }).then(response => {
          let res = response.data;
          this.userItem = res.data;
          // 强制更新UI
          this.$forceUpdate();
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
              url:'/api/corlex/project/addProject',
              //模使用qs拟表单POST请求
              data:qs.stringify({
                pid:this.form.pid,
                name:this.form.name,
                manager:this.form.manager,
                date:this.form.date,
                remark:this.form.remark,
              })
            }).then(response => {
              let res = response.data;
              if(res.status ===1){
                this.$message(res.msg);
                // 刷新路由
                setTimeout(function () {
                  this.$router.go(0);
                },2000)
              }
            }).catch(err => {
              this.$message('网络错误');
            });
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
    }
  }
</script>

<style scoped>
  .dialog-box{
    width: 500px;
    background: #fff;
    padding: 0 0;
    animation: fadein .4s;
    margin: 10px auto;
  }
  @keyframes fadein
  {
    from {opacity: 0}
    to {opacity: 1}
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
