//login form

function vfun1(){    //declaration
    var uname1=document.forms["myform1"]["uname1"].value;
    var upswd1=document.forms["myform1"]["upswd1"].value;

    if(uname1==null || uname1=="")
    {
          document.getElementById("errorBox").innerHTML="Enter the username";

        return false;
    }

    if(upswd1==null || upswd1=="")
    {
          document.getElementById("errorBox").innerHTML="Enter the password";

        return false;
    }

    if(uname1!='' && upswd1!='')
    {
        alert("YOU SUCCESSFULLY LOGGED IN!. Have a great day..")   
    }

}

//register form

function vfun2(){
    var uname2=document.forms["myform2"]["uname2"].value;
    var mailid1=document.forms["myform2"]["mailid1"].value;
    var upswd2=document.forms["myform2"]["upswd2"].value;
    var upswd3=document.forms["myform2"]["upswd3"].value;
    
    if(uname2==null || uname2=="")
    {
          document.getElementById("errorBox").innerHTML="Enter the username";

           return false;
    }
    
    if(mailid1==null || mailid1=="")
    {
          document.getElementById("errorBox").innerHTML="Enter the e-mailid";
  
          return false;
    }

    if(upswd2==null || upswd2=="")
    {
          document.getElementById("errorBox").innerHTML="Enter the password";

          return false;
    }

    if(upswd3==null || upswd3=="")
    {
          document.getElementById("errorBox").innerHTML="Retype the password";

          return false;
    }

    if(upswd2!= upswd3)
    {
      document.getElementById("errorBox").innerHTML="Password is mismatch!";
          return false;

    }

    if(uname2!='' && upswd2!='' && upswd3!='' && mailid1!='')
    {
          alert("YOU SUCCESSFULLY REGISTERED! Login to go more.. " );     
    }
}