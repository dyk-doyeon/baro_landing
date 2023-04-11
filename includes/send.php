<?php
//Required Headers

header("Access-Control-Allow-Origin: *");
header("Conten-Type: application/json; charset=UTF-8");

if($_POST) {
    $recipient = "Barolanding@gmail.com";
    $subject = "To: Baro Landing";
    $visitor_name="";
    $visitor_email = "";
    $visitor_date = "";
    $content ="";
    $fail = array();

//cleans and stores first name in the $visitor_name variable

    if(isset($_POST['firstname']) && !empty($_POST['firstname'])) {
        $visitor_name = filter_var($_POST['firstname'], FILTER_SANITIZE_STRING);
    }else{
        array_push($fail, "firstname");
    }
//cleans and stores last name in the $visitor_name variable
    if(isset($_POST['phone']) && !empty($_POST['phone'])){
        $visitor_name .= " ".filter_var($_POST['phone'], FILTER_SANITIZE_STRING);
    }else{
        array_push($fail, "phone");
    }

  // cleans and stores the email... ^
    if(isset($_POST['email']) && !empty($_POST['email'])){
        $email = str_replace(array("\r", "\n", "%0a", "%0d"), "", $_POST['email']);
        $visitor_email = filter_var($email, FILTER_VALIDATE_EMAIL);
    }else{
        array_push($fail, "email");
    }

    // cleans and stores the email... ^
    if(isset($_POST['date']) && !empty($_POST['date'])){
      $date = str_replace(array("\r", "\n", "%0a", "%0d"), "", $_POST['date']);
      $visitor_date = filter_var($date, FILTER_VALIDATE_EMAIL);
  }else{
      array_push($fail, "email");
  }

//cleans message and stores in $message variable
    if(isset($_POST['content']) && !empty ($_POST['content'])){
        $clean = filter_var($_POST['content'], FILTER_SANITIZE_STRING);
        $content = htmlspecialchars($clean);

    }else{
        array_push($fail, "message");
    }
//how to change this out and make this work
$subject = " From: ".$visitor_name."Email: ".$visitor_email;
$headers = "From: Barolanding@gmail.com"."\r\n"."Reply-to:".$visitor_email."\r\n"."X-MAIL: PHP/".phpversion();
    echo "<script>console.log('Debug Objects: " . $fail . "' );</script>";    
    if(count($fail)==0){
        mail($recipient, $visitor_email, $subject, $content, $visitor_date ,$headers);
        $results['message'] = sprintf("Thank you for contacting me, %s. We will respnd within 24 hours.", $visitor_name);
    }else{
        header("HTTP/1.1 488 You Did NOT fill out the form correctly");
        echo "<script>console.log('Debug Objects: " . $fail . "' );</script>";
        die(json_encode(['message'=> $fail]));
        //die(json_encode($fail));
    }
}else{
    $results['message'] = "sorry message could not be submited";
}
echo json_encode($results);








?>