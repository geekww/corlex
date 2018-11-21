<template>
  <div class="module-box">
    <el-form :model="form" :rules="rules" ref="form" label-width="100px">
      <el-form-item label="任务名：" prop="tname">
        <el-input v-model="form.tname" placeholder="例：A10001" maxlength="6"></el-input>
      </el-form-item>
      <el-form-item label="任务所属：" prop="belong">
        <el-select v-model="form.belong" placeholder="请选择项目">
          <el-option v-for="item in form.belong_item" :label="item.name" :value="item.uid"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="创建人：" prop="agent">
        <el-select v-model="form.agent" placeholder="请选择项目创建人">
          <el-option v-for="item in form.agent_item" :label="item.name" :value="item.uid"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="指派给：" prop="agent">
        <el-select v-model="form.agent" placeholder="请选择任务接收人">
          <el-option v-for="item in form.agent_item" :label="item.name" :value="item.uid"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="创建时间：" prop="date">
        <el-col>
          <el-date-picker type="date" placeholder="选择日期" v-model="form.date" style="width: 100%;"></el-date-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="计划完成：" prop="date">
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
    name: 'CreateTask',
    data() {
      return {
        form: {
          tname: '',
          belong: '',
          belong_item: [
            {name:'111',pid:'10001'},
          ],
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
          tname: [
            { required: true, message: '请输入任务名', trigger: 'blur' },
            { min: 6, max: 6, message: '请输入有效6位数', trigger: 'blur' }
          ],
          name: [
            { required: true, message: '请输入项目名称', trigger: 'blur' },
          ],
          belong: [
            { required: true, message: '请选择项目', trigger: 'change' },
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
  .module-box{
    width: 500px;
    margin: 0 auto;
    padding: 50px;
    background: #fff;
    border-radius: 15px;
    box-shadow: 0 5px 14px 0 rgba(0,0,0,.1);
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
