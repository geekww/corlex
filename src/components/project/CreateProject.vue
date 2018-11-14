<template>
  <div class="module-box">
    <el-form ref="form" :model="form" label-width="100px">
      <el-form-item label="项目编号：">
        <el-input v-model="form.pid"></el-input>
      </el-form-item>
      <el-form-item label="项目名称：">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="处理优先级：">
        <el-select v-model="form.level" placeholder="请选择项目优先级别">
          <el-option label="紧急" value="0"></el-option>
          <el-option label="高" value="1"></el-option>
          <el-option label="中" value="2"></el-option>
          <el-option label="低" value="3"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="创建时间：">
        <el-col>
          <el-date-picker type="date" placeholder="选择日期" v-model="form.date" style="width: 100%;"></el-date-picker>
        </el-col>
      </el-form-item>
      <!--<el-form-item label="即时配送">-->
      <!--<el-switch v-model="form.delivery"></el-switch>-->
      <!--</el-form-item>-->
      <!--<el-form-item label="活动性质">-->
      <!--<el-checkbox-group v-model="form.type">-->
      <!--<el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>-->
      <!--<el-checkbox label="地推活动" name="type"></el-checkbox>-->
      <!--<el-checkbox label="线下主题活动" name="type"></el-checkbox>-->
      <!--<el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>-->
      <!--</el-checkbox-group>-->
      <!--</el-form-item>-->
      <!--<el-form-item label="特殊资源">-->
      <!--<el-radio-group v-model="form.resource">-->
      <!--<el-radio label="线上品牌商赞助"></el-radio>-->
      <!--<el-radio label="线下场地免费"></el-radio>-->
      <!--</el-radio-group>-->
      <!--</el-form-item>-->
      <el-form-item label="项目描述：">
        <el-input type="textarea" v-model="form.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <!--<el-button>取消</el-button>-->
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
          level: '',
          date: '',
          desc: ''
        }
      }
    },
    methods: {
      onSubmit() {
        if(!this.form.name){
          this.$message({
            message: '请输入项目名',
            type: 'warning'
          });
          return false;
        }
        this.$message({
          message: '创建成功',
          type: 'success'
        });
      }
    }
  }
</script>

<style scoped>
  .module-box{
    width: 400px;
    background: #fff;
    padding: 50px 60px;
    box-shadow:0 5px 20px #E4E8EE;
    border-radius:12px;
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
