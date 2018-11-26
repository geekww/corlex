<?php
$con = mysql_connect("localhost","root","root");
$select_db = mysql_select_db('corlex');
if (!$select_db) {
    die("could not connect to the db:\n" .  mysql_error());
}
header('content-type:application/json;charset=utf8');
//查询代码
$sql = "select * from db_project";
$res = mysql_query($sql);
if (!$res) {
    die("could get the res:\n" . mysql_error());
}
while ($row = mysql_fetch_assoc($res)) {
    echo json_encode($row);
}
//查询代码

//关闭数据库连接
mysql_close($con);
?>
