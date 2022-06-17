<?php

$uname2 = $_POST['uname2'];
$mailid1 = $_POST['mailid1'];
$upswd2 = $_POST['upswd2'];
$upswd3 = $_POST['upswd3'];

if (!empty($uname2)  ||!empty($mailid1)||  !empty($upswd2) || !empty($upswd3) )
{

$host = "localhost";
$dbusername = "root";
$dbpassword = "";
$dbname = "project1";



// Create connection
$conn = new mysqli ($host, $dbusername, $dbpassword, $dbname);

if (mysqli_connect_error()){
  die('Connect Error ('. mysqli_connect_errno() .') '
    . mysqli_connect_error());
}
else{
  $SELECT = "SELECT mailid1 From register Where mailid1 = ? Limit 1";
  $INSERT = "INSERT Into register (uname2 , mailid1 ,upswd2, upswd3 )values(?,?,?,?)";

//Prepare statement
     $stmt = $conn->prepare($SELECT);
     $stmt->bind_param("s", $mailid1);
     $stmt->execute();
     $stmt->bind_result($mailid1);
     $stmt->store_result();
     $rnum = $stmt->num_rows;

     //checking username
      if ($rnum==0) {
      $stmt->close();
      $stmt = $conn->prepare($INSERT);
      $stmt->bind_param("ssss", $uname2,$mailid1,$upswd2,$upswd3);
      $stmt->execute();
      echo "New record inserted sucessfully";
     } else {
      echo "Someone already registered using this email";
     }
     $stmt->close();
     $conn->close();
    }
} else {
 echo "All field are required";
 die();
}

?>