$(function () {
    // 消息提示
    $('#toast').click(function () {
        layer.msg("layer.msg('消息提示');");
    });
    // 盖屏
    $('#loader').click(function () {
        layer.open( {
            area:[ 200, 500 ],
            skin: 'layui-layer-molv',
            closeBtn: 0,
            title:'盖屏',
            content:' <pre class="layui-code">' +
                    '// 显示盖屏\n' +
                    'function showLoader(){\n' +
                    '    $(".loader").css(\'display\',\'block\').fakeLoader({\n' +
                    '        timeToHide:3000,\n' +
                    '        spinner:"spinner6",\n' +
                    '        bgColor:"#000"\n' +
                    '    });\n' +
                    '}\n' +
                    '//隐藏盖屏\n' +
                    'function hideLoader(){\n' +
                    '    $(".loader").css(\'display\',\'none\');\n' +
                    '}' +
                    '</pre>'
        });
        // showLoader();
    });
    // 表单校验
    $('#rule').click(function () {
        layer.open( {
            area:[ 200, 500 ],
            skin: 'layui-layer-molv',
            closeBtn: 0,
            title:'表单校验',
            content:' <pre class="layui-code">' +
                    '// 表单校验方法\n' +
                    'function _valiCheck() {\n' +
                    '    let isPhone = /^1[3456789]\\d{9}$/,\n' +
                    '        isVerify = /^\\d{5}$/;\n' +
                    '\n' +
                    'let $null = $(\'#null\'),\n' +
                    '    $tel = $(\'#tel\'),\n' +
                    '    $code = $(\'#code\');\n' +
                    '\n' +
                    '    if(!$null.val()){\n' +
                    '        layer.msg(\'请输入内容\');\n' +
                    '        return false;\n' +
                    '    }\n' +
                    '    if(!isPhone.test($tel.val())){\n' +
                    '        layer.msg(\'请输入正确的手机号\');\n' +
                    '        return false;\n' +
                    '    }\n' +
                    '    if(!isVerify.test($code.val())){\n' +
                    '        layer.msg(\'请输入正确的工号\');\n' +
                    '        return false;\n' +
                    '    }\n' +
                    '    return true;\n' +
                    '}' +
                    '</pre>'
        });
        // let isPhone = /^1[3456789]\d{9}$/,
        //     isVerify = /^\d{5}$/;
        //
        // let $null = $('#null'),
        //     $tel = $('#tel'),
        //     $code = $('#code');
        //
        // if(!$null.val()){
        //     layer.msg('请输入内容');
        //     return false;
        // }
        // if(!isPhone.test($tel.val())){
        //     layer.msg('请输入正确的手机号');
        //     return false;
        // }
        // if(!isVerify.test($code.val())){
        //     layer.msg('请输入正确的工号');
        //     return false;
        // }
        //
        // layer.msg('验证通过');
    });
    // 完整AJAX请求实例
    $('#ajax').click(function () {
        layer.open( {
            area:[ 200, 500 ],
            skin: 'layui-layer-molv',
            closeBtn: 0,
            title:'完整AJAX请求实例',
            content:' <pre class="layui-code">' +
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
        // let $this = $(this);
        // // 启动表单校验
        // if(_valiCheck()){
        //     // 启动盖屏
        //     showLoader();
        //     // 校验通过后禁用当前按钮
        //     $this.attr('disabled',true);
        //     // 启动AJAX
        //     $.ajax({
        //         type:'post',
        //         url:'/mobilemode/apps/solex/template/jsp/ajax.jsp',
        //         data:{},
        //         success: function(res){
        //             if(res.code === '0'){
        //                 layer.msg(res.msg);
        //
        //                 // 请求完成启动按钮
        //                 $this.attr('disabled',false);
        //                 // 关闭盖屏
        //                 hideLoader();
        //             }
        //         },
        //         error:function () {
        //             layer.msg('网络错误');
        //         }
        //     });
        // }
        // // 表单校验方法
        // function _valiCheck() {
        //     let isPhone = /^1[3456789]\d{9}$/,
        //         isVerify = /^\d{5}$/;
        //
        //     let $null = $('#null'),
        //         $tel = $('#tel'),
        //         $code = $('#code');
        //
        //     if(!$null.val()){
        //         layer.msg('请输入内容');
        //         return false;
        //     }
        //     if(!isPhone.test($tel.val())){
        //         layer.msg('请输入正确的手机号');
        //         return false;
        //     }
        //     if(!isVerify.test($code.val())){
        //         layer.msg('请输入正确的工号');
        //         return false;
        //     }
        //     return true;
        // }
    });

    // layui初始化
    layui.use(['laydate'], function() {
        let laydate = layui.laydate;

        //日期初始化
        laydate.render({
            elem: '#date'
        });
        //日期范围初始化
        laydate.render({
            elem: '#dateStart'
        });
        laydate.render({
            elem: '#dateEnd'
        });
    });
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

    // code
    code();
    function code() {
        // 表单
        $('#long-rea').click(function () {
            layer.open( {
                area:[ 200, 500 ],
                skin: 'layui-layer-molv',
                closeBtn: 0,
                title:'长文本输入框',
                content:'<pre class="layui-code">' +
                        '&ltdiv class="form-group-item"&gt\n' +
                        '  &ltdiv class="form-inline"&gt\n' +
                        '    &ltlabel class="form-label" for="long">长文本输入框：&lt/label&gt\n' +
                        '    &lt!--form-input-block 控制为长文本输入框--&gt\n' +
                        '    &ltdiv class="form-input-block"&gt\n' +
                        '      &ltinput type="text" class="form-control" id="long" placeholder="请输入长文本" autocomplete="off"&gt\n' +
                        '    &lt/div&gt\n' +
                        '  &lt/div&gt\n' +
                        '&lt/div&gt'+
                        '</pre>'
            });
        });
        $('#area-rea').click(function () {
            layer.open( {
                area:[ 200, 500 ],
                skin: 'layui-layer-molv',
                closeBtn: 0,
                title:'短文本输入框',
                content:'<pre class="layui-code">' +
                        '&ltdiv class="form-group-item"&gt\n' +
                        '    &ltlabel class="form-label-area" for="long">多行文本框：&lt/label&gt\n' +
                        '    &lt!--form-input-block 控制为长多行文本输入框--&gt\n' +
                        '    &ltdiv class="form-input-block"&gt\n' +
                        '      &lttextarea class="form-control-area" id="area" placeholder="多行文本框">&lt/textarea&gt\n' +
                        '    &lt/div&gt\n' +
                        '&lt/div>\n'+
                        '&ltdiv class="form-group-item"&gt\n' +
                        '    &ltlabel class="form-label-area" for="long">多行文本框：&lt/label&gt\n' +
                        '    &lt!--form-input-inline 控制为短多行文本输入框--&gt\n' +
                        '    &ltdiv class="form-input-inline"&gt\n' +
                        '      &lttextarea class="form-control-area" id="area-short" placeholder="多行文本框">&lt/textarea&gt\n' +
                        '    &lt/div&gt\n' +
                        '&lt/div>'+
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
    }
});
