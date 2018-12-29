<template>
  <div class="module-box">
    <el-form :model="form" :rules="rules" ref="form" label-width="100px">
      <el-form-item label="任务名：" prop="task">
        <el-input v-model="form.task" placeholder="请输入任务名" maxlength="6"></el-input>
      </el-form-item>
      <el-form-item label="任务所属：" prop="pid">
        <el-select v-model="form.pid" placeholder="请选择项目">
          <el-option v-for="item in this.$store.state.projectItem" :label="item.project" :value="item.pid"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="创建人：" prop="create">
        <el-select v-model="form.create" placeholder="请选择项目创建人">
          <el-option v-for="item in this.$store.state.hrItem" :label="item.name" :value="item.uid"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="指派给：" prop="manager">
        <el-select v-model="form.manager" placeholder="请选择任务接收人">
          <el-option v-for="item in this.$store.state.hrItem" :label="item.name" :value="item.uid"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="创建时间：" prop="dateCreate">
        <el-col>
          <el-date-picker type="date" placeholder="选择日期" value-format="yyyy-MM-dd" v-model="form.dateCreate" style="width: 100%;"></el-date-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="计划完成：" prop="dateEnd">
        <el-col>
          <el-date-picker type="date" placeholder="选择日期" value-format="yyyy-MM-dd" v-model="form.dateEnd" style="width: 100%;"></el-date-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="项目描述：" prop="remark">
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
    name: 'CreateTask',
    data() {
      return {
        form: {
          task: '',
          pid: '',
          create: '',
          manager: '',
          dateCreate: '',
          dateEnd: '',
          remark: ''
        },
        rules: {
          task: [
            { required: true, message: '请输入任务名', trigger: 'blur' },
          ],
          pid: [
            { required: true, message: '请选择任务所属项目', trigger: 'change' },
          ],
          create: [
            { required: true, message: '请选择创建人', trigger: 'change' },
          ],
          manager: [
            { required: true, message: '请选择项目负责人', trigger: 'change' },
          ],
          dateCreate: [
            { required: true, message: '请选择日期', trigger: 'change' }
          ],
          dateEnd: [
            { required: true, message: '请选择计划日期', trigger: 'change' }
          ],
          remark: [
            { required: true, message: '请输入任务描述', trigger: 'blur' },
          ],
        }
      };
    },
    mounted:function(){
      this.$nextTick(function(){
        // 更新全局项目列表、人员列表
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
