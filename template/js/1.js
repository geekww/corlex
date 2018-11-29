&ltscript&gt
$(function () {
  layui.use(['laydate'], function() {
    let laydate = layui.laydate;

    //日期初始化
    laydate.render({
      elem: '#date'
    });
  });
});
&lt/script&gt
