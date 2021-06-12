
/*function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

*/


function validate(){
  var pass=document.getElementById("pass").value;
  var fname=document.getElementById("fname").value;
  var lname=document.getElementById("lname").value;
  var phone=document.getElementById("phone").value;
  var address=document.getElementById("address").value;
  var email=document.getElementById("email").value;

  
  
  if(fname.length<3)
  {
    alert("first name can not be less than 3 chars");
    return false;
  }
  if(lname.length<3)
  {
    alert("last name can not be less than 3 chars");
    return false;
  }
  if(phone.length != 11)
  {
    alert("phone number should be 11 digits");
    return false;
  }
  if(address.length<3)
  {
    alert("address cant be less than 3 chars");
    return false;
  }
  if(email.indexOf('@')<0)
  {
    alert("email should contain @");
    return false;
  }
  if(pass.length!=8)
   {
   
     alert("pass should be 8 digits no more no less");
    return false;
   }
   
   if(pass.indexOf(' ')>=0){
     alert("pass shouldnt contain spaces chars")
     return false;
   }
  if(pass.search(/[0-9]/)==-1){
     alert(" pass should contain numbers");
     return false;
   }
   if(pass.search(/[a=z]/)==-1){
     alert("pass should contain lower chars");
     return false;
   }
   var first= pass.substr(0,1);
   if(!(first.match(/[A-Z]/))){
     alert("first letter should be Uppercase");
     return false;
   }
   if(pass.search(/[$&+,:;=?@#|'<>.^*()%!-]/)==-1){
   alert("pass should contain special chars");
   return false;
   }
  
}
