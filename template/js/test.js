
$(function () {
    var i = 2;
    for(let i=0; i<10; i++){
        //作用域内使用var声明变量的i会影响到作用域外面的i变量
    }
    console.log(i);//i输出10





    //单行注释

    //使用多个单行注释
    //替换多行注释

    /*
    符合w3c规范的
    多行注释
    */


    function cx() {
        //查询函数
    }

    function header_search(){
        //使用钩子命名法分模块
    }

    function footer_search(){
        //使用钩子命名法分模块
    }

    //创建标签
    var str = '<div style="color: #fff;height: 50px;"></div>';
    //将标签插入到对应DOM中
    $('div').innerHTML = str;
    //清空DOM
    $('div').innerHTML = '';

    // 表单校验
    function _valiCheck() {
        let isPhone = /^1[3456789]\d{9}$/, //电话号码校验正则
            isVerify = /^\d{5}$/; //五位长度校验正则

        let $null = $('#null'),
            $tel = $('#tel'),
            $code = $('#code');

        if(!$null.val()){
            layer.msg('请输入内容');
            return false;
        }
        //不为空的时候再次校验是否符合正则规格
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
    //表单校验通过过执行提交事件
    if(_valiCheck()){

    }
});

