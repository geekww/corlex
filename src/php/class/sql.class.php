<?php
class sql
{
    public $host = "localhost";//定义默认连接方式
    public $zhang = "root";//定义默认用户名
    public $mi = "root";//定义默认的密码
    public $dbname = "corlex";//定义默认的数据库名

    //成员方法   是用来执行sql语句的方法
    public function Query($sql,$type=1)
    //两个参数：sql语句，判断返回1查询或是增删改的返回
    {
    //造一个连接对象，参数是上面的那四个
        $db = new mysqli($this->host,$this->zhang,$this->mi,$this->dbname);
        $r = $db->query($sql);
        if($type == "1")
        {
            return $r->fetch_all();//查询语句，返回数组.执行sql的返回方式是all，也可以换成row
        }
        else
        {
            return $r;
        }
    }

}

?>
