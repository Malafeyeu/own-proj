<?php 
// EDIT THE 2 LINES BELOW AS REQUIRED
$send_email_to = "info@performo.ru";
$email_subject = "Запрос с сайта";

function send_email($name,$email,$email_message,$phone,$service)
{
  global $send_email_to;
  global $email_subject;
  global $return_array;
  $headers = "MIME-Version: 1.0" . "\r\n";
  $headers .= "Content-type:text/html;charset=utf-8" . "\r\n";
  $headers .= "From: info@performo.ru\r\n";
  $message = "<strong>Email = </strong>".$email."<br>";
  $message .= "<strong>Phone = </strong>".$phone."<br>";
  $message .= "<strong>Name = </strong>".$name."<br>";  
  $message .= "<strong>Message = </strong>".$email_message."<br>";
  $message .= "<strong>Service = </strong>".$service."<br>";
  $res = mail($send_email_to, $email_subject, $message,$headers);
  $return_array['debug'] = print_r($res,1);
  return true;
}

function validate($name,$email,$message,$phone,$service)
{
  $return_array = array();
  $return_array['success'] = '1';
  $return_array['name_msg'] = $name;
  $return_array['email_msg'] = $email;
  $return_array['message_msg'] = $message;
  $return_array['service_msg'] = $service;
  $return_array['phone_msg'] = $phone;
	
  //echo $name.'-'.$email.'-'.$message.'-'.$phone;
  if($email == '')
  {
    //$return_array['success'] = '0';
    //$return_array['email_msg'] = 'email is required';
  }
  else
  {
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
    if(!preg_match($email_exp,$email)) {
      $return_array['success'] = '0';
      $return_array['email_msg'] = 'enter valid email.';  
    }
  }
  if($name == '')
  {
    $return_array['success'] = '0';
    $return_array['name_msg'] = 'name is required';
  }
  else
  {
//    $string_exp = "/^[А-Яа-я .'-]+$/";
//    if (!preg_match($string_exp, $name)) {
//      $return_array['success'] = '0';
//      $return_array['name_msg'] = 'enter valid name.';
//    }
  }

  if($phone == '')
  {
    $return_array['success'] = '0';
    $return_array['phone_msg'] = 'phone is required';
  }
  else
  {
    //$string_exp = "/^[0-9]10+$/";
    //if (!preg_match($string_exp, $name)) {
      //$return_array['success'] = '0';
      //$return_array['name_msg'] = 'enter valid name.';
    //}
  }
		
  if($message == '')
  {
    //$return_array['success'] = '0';
    //$return_array['message_msg'] = 'message is required';
  }
  else
  {
    if (strlen($message) < 2) {
      $return_array['success'] = '0';
      $return_array['message_msg'] = 'enter valid message.';
    }
  }
  return $return_array;
}
echo $name;
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];
$service =  '';
	foreach($_POST['service'] as $value){
		$service .= $value.', ';
	}

$return_array = validate($name,$email,$message,$phone,$service);

if($return_array['success'] == '1')
{
	send_email($name,$email,$message,$phone,$service);
}
header('Content-type: text/json');
echo json_encode($return_array);
die();
?>