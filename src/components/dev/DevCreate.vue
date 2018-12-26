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
    name: 'DevCreate'
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
