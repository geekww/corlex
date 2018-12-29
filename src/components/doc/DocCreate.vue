<template>
  <div class="rich-text">
    <header class="rich-header">
      <input type="text" placeholder="输入文章标题..." autocomplete="off">
      <div class="tool-bar">
        <a class="save">保存</a>
      </div>
    </header>
    <div class="rich-edit">
        <div class="edit">
            <textarea v-model="textInput"></textarea>
        </div>
        <div class="preview" v-html="compileMarkDown(this.textInput)"></div>
    </div>
  </div>
</template>

<script>
  import showdown from 'showdown'
  export default
  {
    name: 'DocCreate',
    data() {
      return {
        textInput:'',
        textOutput:'',
      };
    },
    methods: {
      // 编译富文本
      compileMarkDown:function(value){
        let conver = new showdown.Converter();
        return conver.makeHtml(value)
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
    height: 7%;
    border-bottom: 1px solid #ddd;
    position: relative;
  }
  .rich-header input[type='text']{
    border: none;
    width: 80%;
    height: 100%;
    float: left;
    padding: 0 20px;
    font-size: 22px;
    outline: none;
    font-weight: 300;
  }
  .tool-bar{
    position: absolute;
    width: 250px;
    right: 0;
  }
  .tool-bar .save{
    color: #ddd;
    border: 1px solid #ddd;
    border-radius: 3px;
    width: 60px;
    float: left;
    height: 30px;
    line-height: 30px;
    margin-top: 15px;
    transition: .7s;
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
  .preview p code {
    display: block;
    color: #333;
    background: #f8f8f8;
  }
  .preview h1{
    font-size: 30px;
  }
</style>
