<?php
    //连接数据库
    //include引入方法
//    include ("./class/sql.class.php");
//
//    //造一个对象
//    $db = new sql();
////开始写语句
//    $sql = "select * from project";
//    //执行
//    $arr = $db->Query($sql);
//
//    foreach($arr as $v)
//    {
//        echo $arr;
//    }

//连接数据库方式1
$conn = new mysqli('localhost', 'root', 'root', 'corlex');

//check connection (检查PHP是否连接上MYSQL)
if ($conn -> connect_errno) {
    printf("Connect failed: %s\n", $conn->connect_error);
    exit();
}

//查询代码
$sql = "select * from project";
$query = $conn->query($sql);
while($row = $query->fetch_array()){
    echo $row['name'];
}
//查询代码

//释放结果集+关闭MySQL连接
$query -> free_result();
$conn -> close();
?>
