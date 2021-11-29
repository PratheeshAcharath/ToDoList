

function validateform() {
    var uname = document.getElementById("uname").value;
    var psw = document.getElementById("psw").value;
    if (uname == "admin" && psw == "12345") {
        // alert ("Login successfully");
        window.location = "https://retail.ictkerala.org/mod/page/view.php?id=7427";
        return false;
    } else {
        alert("Username or Password is incorrect");
    }
}