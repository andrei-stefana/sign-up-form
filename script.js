const user_password = document.getElementById("user_password"),
      password_repeat = document.getElementById("password_repeat");

function passwordValid(){
    if(user_password.value != password_repeat.value) {
        password_repeat.setCustomValidity("Password does not match");
    } else {
        password_repeat.setCustomValidity('');
    }
}

user_password.onchange = passwordValid;
password_repeat.onkeyup = passwordValid;