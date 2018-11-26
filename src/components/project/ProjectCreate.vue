<template>
  <div class="dialog-box">
    <el-form :model="form" :rules="rules" ref="form" label-width="100px">
      <el-form-item label="项目编号：" prop="pid">
        <el-input v-model="form.pid" placeholder="例：A10001" maxlength="6"></el-input>
      </el-form-item>
      <el-form-item label="项目名称：" prop="name">
        <el-input v-model="form.name" placeholder="请输入项目名称" maxlength="30"></el-input>
      </el-form-item>
      <el-form-item label="负责人：" prop="agent">
        <el-select v-model="form.agent" placeholder="请选择项目负责人">
          <el-option v-for="item in form.agent_item" :label="item.name" :value="item.uid"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="创建时间：" prop="date">
        <el-col>
          <el-date-picker type="date" placeholder="选择日期" v-model="form.date" style="width: 100%;"></el-date-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="项目描述：">
        <el-input type="textarea" v-model="form.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit('form')">立即创建</el-button>
        <el-button @click="resetForm('form')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: 'CreateProject',
    data() {
      return {
        form: {
          pid: '',
          name: '',
          agent: '',
          agent_item: [
            {name:'张',uid:'10001'},
            {name:'王',uid:'10002'}
          ],
          date: '',
          desc: ''
        },
        rules: {
          pid: [
            { required: true, message: '请输入项目编号', trigger: 'blur' },
            { min: 6, max: 6, message: '请输入有效6位数', trigger: 'blur' }
          ],
          name: [
            { required: true, message: '请输入项目名称', trigger: 'blur' },
          ],
          agent: [
            { required: true, message: '请选择项目负责人', trigger: 'change' },
          ],
          date: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
        }
      };
    },
    methods: {
      onSubmit:function(formName){
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$notify({
              title: '成功',
              message: '项目创建成功',
              type: 'success'
            });
          } else {
            console.log('error submit!!');
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
