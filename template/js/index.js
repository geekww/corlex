$(function () {
    // 消息提示
    $('#toast').click(function () {
        layer.msg('提交成功');
    });
    // 盖屏
    $('#loader').click(function () {
        showLoader();
    });
    // 规则校验
    $('#rule').click(function () {
        var isPhone = /^1[3456789]\d{9}$/;
        var isVerify = /^\d{5}$/;

        var $null = $('#null'),
            $tel = $('#tel'),
            $code = $('#code');

        if(!$null.val()){
            layer.msg('请输入内容');
            return false;
        }
        if(!isPhone.test($tel.val())){
            layer.msg('请输入正确的手机号');
            return false;
        }
        if(!isVerify.test($code.val())){
            layer.msg('请输入正确的工号');
            return false;
        }

        layer.msg('验证通过');
    });
    // 完整AJAX请求实例
    $('#ajax').click(function () {
        var $this = $(this);
        // 启动表单校验
        if(_valiCheck()){
            // 启动盖屏
            showLoader();
            // 校验通过后禁用当前按钮
            $this.attr('disabled',true);
            // 启动AJAX
            $.ajax({
                type:'post',
                url:'/mobilemode/apps/solex/template/jsp/ajax.jsp',
                data:{},
                success: function(res){
                    if(res.code === '0'){
                        layer.msg(res.msg);

                        // 请求完成启动按钮
                        $this.attr('disabled',false);
                        // 关闭盖屏
                        hideLoader();
                    }

                },
                error:function () {
                    layer.msg('网络错误');
                }
            });
        }
        // 表单校验方法
        function _valiCheck() {
            var isPhone = /^1[3456789]\d{9}$/;
            var isVerify = /^\d{5}$/;

            var $null = $('#null'),
                $tel = $('#tel'),
                $code = $('#code');

            if(!$null.val()){
                layer.msg('请输入内容');
                return false;
            }
            if(!isPhone.test($tel.val())){
                layer.msg('请输入正确的手机号');
                return false;
            }
            if(!isVerify.test($code.val())){
                layer.msg('请输入正确的工号');
                return false;
            }
            return true;
        }
    });

    // layui初始化
    layui.use(['laydate'], function() {
        var laydate = layui.laydate;

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
    // 盖屏方法
    function showLoader(){
        $(".loader").css('display','block').fakeLoader({
            timeToHide:3000,
            spinner:"spinner6",
            bgColor:"#000"
        });
    }
    function hideLoader(){
        $(".loader").css('display','none');
    }
});
