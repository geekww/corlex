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
});
