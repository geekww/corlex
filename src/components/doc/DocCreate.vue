<template>
  <div class="rich-text">
    <header class="rich-header">
      <input type="text" placeholder="输入文档标题..." autocomplete="off" v-model="title">
      <div class="tool-bar">
        <a class="save" @click="onSave()">保存</a>
        <a class="save" @click="onRelease()">发布</a>
      </div>
    </header>
    <div class="rich-edit">
      <mavon-editor v-model="markdown"/>
    </div>
  </div>
</template>

<script>
  import showdown from 'showdown'
  import qs from 'qs'
  export default
  {
    name: 'DocCreate',
    data() {
      return {
        title:'',
        markdown:'',
        text:''
      };
    },
    methods: {
      // 编译富文本
      // compileMarkDown:function(value){
      //   let conver = new showdown.Converter();
      //   return conver.makeHtml(value)
      // },
      onSave:function () {
        this.axios({
          method:'post',
          headers:{
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
          },
          url:'/api/corlex/doc/saveDoc',
          //模使用qs拟表单POST请求
          data:qs.stringify({
            title:this.title,
            markdown:this.markdown
          })
        }).then(response => {
          let res = response.data;
          this.$message(res.msg);
        }).catch(err => {
          this.$message('网络错误');
        });
      }
    }
  }
</script>

<style scoped>
  .rich-text *{
    box-sizing: border-box;
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  }
  .rich-text{
    width: 96%;
    margin: 0 auto;
    height: 100%;
    background: #fff;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 0 15px 15px 0 rgba(15, 37, 64, 0.1);
  }
  .rich-header{
    width: 100%;
    height: 40px;
    border-bottom: 1px solid #ddd;
    position: relative;
  }
  .rich-header input[type='text']{
    border: none;
    width: 80%;
    height: 100%;
    float: left;
    padding: 0 20px;
    font-size: 18px;
    outline: none;
    font-weight: 300;
  }
  .tool-bar{
    position: absolute;
    width: 20%;
    right: 0;
  }
  .tool-bar .save{
    color: #ddd;
    border: 1px solid #ddd;
    border-radius: 3px;
    width: 60px;
    float: left;
    height: 24px;
    line-height: 24px;
    transition: .7s;
    margin: 8px 5px;
  }
  .tool-bar .save:hover{
    color: #9d9a9a;
    border: 1px solid #9d9a9a;
  }
  .rich-edit{
    width: 100%;
    height: 88%;
  }
  .edit{
    width: 50%;
    height: 100%;
    float: left;
    border-bottom: 1px solid #ddd;
    border-right: 1px solid #ddd;
  }
  .edit textarea{
    width: 100%;
    height: 100%;
    outline: none;
    border: none;
    padding: 20px;
    font-size: 22px;
    line-height: 1.5;
  }
  .preview{
    width: 50%;
    height: 100%;
    border-bottom: 1px solid #ddd;
    float: right;
    text-align: left;
    padding: 0 20px;
    overflow: auto;
  }
  .markdown-body{
    height: 100%;
  }
</style>
