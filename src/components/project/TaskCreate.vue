<template>
  <div class="module-box">
    <el-form :model="form" :rules="rules" ref="form" label-width="100px">
      <el-form-item label="任务名：" prop="tname">
        <el-input v-model="form.tname" placeholder="请输入任务名" maxlength="6"></el-input>
      </el-form-item>
      <el-form-item label="任务所属：" prop="belong">
        <el-select v-model="form.belong" placeholder="请选择项目">
          <el-option v-for="item in form.belong_item" :label="item.name" :value="item.pid"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="创建人：" prop="create">
        <el-select v-model="form.create" placeholder="请选择项目创建人">
          <el-option v-for="item in form.create_item" :label="item.name" :value="item.uid"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="指派给：" prop="agent">
        <el-select v-model="form.agent" placeholder="请选择任务接收人">
          <el-option v-for="item in form.agent_item" :label="item.name" :value="item.uid"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="创建时间：" prop="dateCreate">
        <el-col>
          <el-date-picker type="date" placeholder="选择日期" v-model="form.dateCreate" style="width: 100%;"></el-date-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="计划完成：" prop="dateEnd">
        <el-col>
          <el-date-picker type="date" placeholder="选择日期" v-model="form.dateEnd" style="width: 100%;"></el-date-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="项目描述：" prop="desc">
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
            {name:'松霖商城',pid:'10001'},
            {name:'松霖OA',pid:'10002'},
          ],
          name: '',
          create: '',
          create_item: [
            {name:'张',uid:'10001'},
            {name:'王',uid:'10002'}
          ],
          agent: '',
          agent_item: [
            {name:'张',uid:'10001'},
            {name:'王',uid:'10002'}
          ],
          dateCreate: '',
          dateEnd: '',
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
          create: [
            { required: true, message: '请选择创建人', trigger: 'change' },
          ],
          agent: [
            { required: true, message: '请选择项目负责人', trigger: 'change' },
          ],
          dateCreate: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          dateEnd: [
            { type: 'date', required: true, message: '请选择计划日期', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请输入任务描述', trigger: 'blur' },
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
    border-radius: 5px;
    box-shadow: 0 15px 15px 0 rgba(15, 37, 64, 0.1);
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
