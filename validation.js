

function validateform() {
    var uname = document.getElementById("uname").value;
    var psw = document.getElementById("psw").value;
    if (uname == "admin" && psw == "12345") {
        alert ("Login successfully");
        window.location = "";
        return false;
    } else {
        alert("Username or Password is incorrect");
    }
}