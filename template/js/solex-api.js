$(function () {
  // 完整AJAX请求实例
  $('#ajax').click(function () {
    layer.open({
      area: [200, 500],
      skin: 'layui-layer-molv',
      closeBtn: 0,
      title: '完整AJAX请求实例',
      content: ' <pre class="layui-code">' +
        'let $this = $(this);\n' +
        '// 启动表单校验\n' +
        'if(_valiCheck()){\n' +
        '    // 启动盖屏\n' +
        '    showLoader();\n' +
        '    // 校验通过后禁用当前按钮\n' +
        '    $this.attr(\'disabled\',true);\n' +
        '    // 启动AJAX\n' +
        '    $.ajax({\n' +
        '        type:\'post\',\n' +
        '        url:\'/mobilemode/apps/solex/template/jsp/ajax.jsp\',\n' +
        '        data:{},\n' +
        '        success: function(res){\n' +
        '            if(res.code === \'0\'){\n' +
        '                layer.msg(res.msg);\n' +
        '\n' +
        '               // 请求完成启动按钮\n' +
        '               $this.attr(\'disabled\',false);\n' +
        '               // 关闭盖屏\n' +
        '               hideLoader();\n' +
        '           }\n' +
        '        },\n' +
        '        error:function () {\n' +
        '            layer.msg(\'网络错误\');\n' +
        '        }\n' +
        '    });\n' +
        '}' +
        '</pre>'
    });
  });
  // 表单
  $('#long-rea').click(function () {
    layer.open( {
      area:[ 200, 500 ],
      skin: 'layui-layer-molv',
      closeBtn: 0,
      title:'长文本输入框',
      content:'<pre class="layui-code">' +
        '&ltform class="form-group"&gt\n' +
        '  &ltdiv class="form-group-item"&gt\n' +
        '    &ltdiv class="form-inline"&gt\n' +
        '      &ltlabel class="form-label" for="long">长文本输入框：&lt/label&gt\n' +
        '      &lt!--form-input-block 控制为长文本输入框--&gt\n' +
        '      &ltdiv class="form-input-block"&gt\n' +
        '        &ltinput type="text" class="form-control" id="long" placeholder="请输入长文本" autocomplete="off"&gt\n' +
        '      &lt/div&gt\n' +
        '    &lt/div&gt\n' +
        '  &lt/div&gt\n'+
        '&lt/form&gt'+
        '</pre>'
    });
  });
  $('#area-rea').click(function () {
    layer.open( {
      area:[ 200, 500 ],
      skin: 'layui-layer-molv',
      closeBtn: 0,
      title:'多行文本框',
      content:'<pre class="layui-code">' +
        '&ltform class="form-group"&gt\n' +
        '   &ltdiv class="form-group-item"&gt\n' +
        '       &ltlabel class="form-label-area" for="long">多行文本框：&lt/label&gt\n' +
        '       &lt!--form-input-block 控制为长多行文本输入框--&gt\n' +
        '       &ltdiv class="form-input-block"&gt\n' +
        '         &lttextarea class="form-control-area" id="area" placeholder="多行文本框">&lt/textarea&gt\n' +
        '       &lt/div&gt\n' +
        '   &lt/div>\n'+
        '   &ltdiv class="form-group-item"&gt\n' +
        '       &ltlabel class="form-label-area" for="long">多行文本框：&lt/label&gt\n' +
        '       &lt!--form-input-inline 控制为短多行文本输入框--&gt\n' +
        '       &ltdiv class="form-input-inline"&gt\n' +
        '         &lttextarea class="form-control-area" id="area-short" placeholder="多行文本框">&lt/textarea&gt\n' +
        '       &lt/div&gt\n' +
        '   &lt/div&gt\n' +
        '&lt/form>'+
        '</pre>'
    });
  });
  $('#short-code').click(function () {
    layer.open( {
      area:[ 200, 500 ],
      skin: 'layui-layer-molv',
      closeBtn: 0,
      title:'单行文本框',
      content:'<pre class="layui-code">' +
        '&ltform class="form-group"&gt\n' +
        '  &ltdiv class="form-group-item"&gt\n' +
        '     &ltdiv class="form-inline"&gt\n' +
        '       &ltlabel class="form-label" for="short"&gt短文本输入框：&lt/label&gt\n' +
        '       &lt!--form-input-inline 短文本输入框--&gt\n' +
        '       &ltdiv class="form-input-inline"&gt\n' +
        '         &ltinput type="text" class="form-control" id="short" placeholder="请输入短文本" autocomplete="off"&gt\n' +
        '       &lt/div&gt\n' +
        '     &lt/div&gt\n' +
        '     &ltdiv class="form-inline"&gt\n' +
        '       &ltlabel class="form-label" for="select"&gt下拉框：&lt/label&gt\n' +
        '       &ltdiv class="form-input-inline"&gt\n' +
        '         &ltselect class="form-control cursor" id="select"&gt\n' +
        '           &ltoption value="1"&gt项目1&lt/option&gt\n' +
        '           &ltoption value="2"&gt项目2&lt/option&gt\n' +
        '           &ltoption value="3"&gt项目3&lt/option&gt\n' +
        '           &ltoption value="4"&gt项目4&lt/option&gt\n' +
        '         &lt/select&gt\n' +
        '       &lt/div&gt\n' +
        '     &lt/div&gt\n' +
        '  &lt/div&gt\n' +
        '&lt/form&gt'+
        '</pre>'
    });
  });
  $('#date-code').click(function () {
    layer.open( {
      area: ['920px', '500px'],
      skin: 'layui-layer-molv',
      closeBtn: 0,
      title:'日期选择框',
      content:'<pre class="layui-code">' +
        '&ltform class="form-group"&gt\n' +
        '  &ltdiv class="form-inline"&gt\n' +
        '    &ltlabel class="form-label" for="date"&gt日期：&lt/label&gt\n' +
        '    &ltdiv class="form-input-inline"&gt\n' +
        '      &lt!--cursor 控制鼠标移入输入框变手状--&gt\n' +
        '      &ltinput type="text" class="form-control cursor" id="date" placeholder="请选择日期" autocomplete="off"&gt\n' +
        '    &lt/div&gt\n' +
        '  &lt/div&gt\n' +
        '  &ltdiv class="form-inline"&gt\n' +
        '    &ltlabel class="form-label"&gt日期区间：&lt/label&gt\n' +
        '    &ltdiv class="form-input-inline"&gt\n' +
        '      &ltinput type="text" class="form-control cursor" id="dateStart" placeholder="请选择开始日期" autocomplete="off"&gt\n' +
        '    &lt/div&gt\n' +
        '    &ltspan class="data-line"&gt至&lt/span&gt\n' +
        '    &ltdiv class="form-input-inline"&gt\n' +
        '      &ltinput type="text" class="form-control cursor" id="dateEnd" placeholder="请选择结束日期" autocomplete="off"&gt\n' +
        '    &lt/div&gt\n' +
        '  &lt/div&gt\n' +
        '&lt/form>\n' +
        '&ltscript&gt\n' +
        '$(function () {\n' +
        '  layui.use([\'laydate\'], function() {\n' +
        '    let laydate = layui.laydate;\n' +
        '\n' +
        '    //日期初始化\n' +
        '    laydate.render({\n' +
        '      elem: \'#date\'\n' +
        '    });\n' +
        '  });\n' +
        '});\n' +
        '&lt/script&gt'+
        '</pre>'
    });
  });
  // 按钮
  $('#default').click(function () {
    layer.msg('&ltbutton type="button" class="solex-btn"&gt默认&lt/button&gt');
  });
  $('.solex-btn-blue').click(function () {
    layer.msg('&ltbutton type="button" class="solex-btn-blue"&gt松霖蓝&lt/button&gt');
  });
  $('.solex-btn-white').click(function () {
    layer.msg('&ltbutton type="button" class="solex-btn-white"&gt松霖白&lt/button&gt');
  });
  $('.solex-btn-green').click(function () {
    layer.msg('&ltbutton type="button" class="solex-btn-green"&gt松霖绿&lt/button&gt');
  });
  $('.solex-btn-blue-white').click(function () {
    layer.msg('&ltbutton type="button" class="solex-btn-blue-white"&gt松霖蓝白&lt/button&gt');
  });
  $('.solex-btn-red').click(function () {
    layer.msg('&ltbutton type="button" class="solex-btn-red"&gt松霖红&lt/button&gt');
  });
  $('.solex-btn-orange').click(function () {
    layer.msg('&ltbutton type="button" class="solex-btn-orange"&gt松霖橙&lt/button&gt');
  });

  $('.solex-btn-search').click(function () {
    layer.msg('&ltbutton type="button" class="solex-btn-search"&gt搜索&lt/button&gt');
  });
  $('.solex-btn-submit').click(function () {
    layer.msg('&ltbutton type="button" class="solex-btn-submit"&gt提交&lt/button&gt');
  });
  $('.solex-btn-save').click(function () {
    layer.msg('&ltbutton type="button" class="solex-btn-save"&gt保存&lt/button&gt');
  });
  $('.solex-btn-print').click(function () {
    layer.msg('&ltbutton type="button" class="solex-btn-print"&gt打印&lt/button&gt');
  });
  $('.solex-btn-import').click(function () {
    layer.msg('&ltbutton type="button" class="solex-btn-import"&gt导入&lt/button&gt');
  });
  $('.solex-btn-export').click(function () {
    layer.msg('&ltbutton type="button" class="solex-btn-export"&gt导出&lt/button&gt');
  });
  $('.solex-btn-add').click(function () {
    layer.msg('&ltbutton type="button" class="solex-btn-add"&gt增加&lt/button&gt');
  });
  $('.solex-btn-del').click(function () {
    layer.msg('&ltbutton type="button" class="solex-btn-del"&gt删除&lt/button&gt');
  });
  $('.solex-btn-copy').click(function () {
    layer.msg('&ltbutton type="button" class="solex-btn-copy"&gt复制&lt/button&gt');
  });
  $('.solex-btn-back').click(function () {
    layer.msg('&ltbutton type="button" class="solex-btn-back"&gt退回&lt/button&gt');
  });

  $('.solex-icon-time').click(function () {
    layer.msg('&lta class="solex-icon-time left"&gt&lt/a&gt');
  });
  $('.solex-icon-date').click(function () {
    layer.msg('&lta class="solex-icon-date left"&gt&lt/a&gt');
  });
  $('.solex-icon-search').click(function () {
    layer.msg('&lta class="solex-icon-search left"&gt&lt/a&gt');
  });
  $('.solex-icon-add').click(function () {
    layer.msg('&lta class="solex-icon-add left"&gt&lt/a&gt');
  });
  $('.solex-icon-del').click(function () {
    layer.msg('&lta class="solex-icon-del left"&gt&lt/a&gt');
  });
  $('.solex-icon-check').click(function () {
    let $this = $(this);
    if($this.hasClass('checked')){
      $this.removeClass('checked');
      layer.msg('&lta class="solex-icon-check left"&gt&lt/a&gt');
    }else {
      $this.addClass('checked');
      layer.msg('&lta class="solex-icon-check left checked"&gt&lt/a&gt');
    }
  });
  $('.solex-icon-check.checked').click(function () {
    layer.msg('&lta class="solex-icon-check left checked"&gt&lt/a&gt');
  });
  // 方法
  // 显示盖屏
  function showLoader(){
    $(".loader").css('display','block').fakeLoader({
      timeToHide:3000,
      spinner:"spinner6",
      bgColor:"#000"
    });
  }
  //隐藏盖屏
  function hideLoader(){
    $(".loader").css('display','none');
  }
});
