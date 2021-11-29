



function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "admin" && password == "12345"){
// alert ("Login successfully");
window.location = "index2.html"; // Redirecting to other page.
return false;
}
else{

alert("Username or Password is incorrect");

}
}