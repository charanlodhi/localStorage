function validate() {
    var firstName = document.getElementById('firstName').value;
    if (firstName == " " || firstName == '') {
        document.getElementById('error1').innerText = 'Please Enter You First Name'
    } else {
        document.getElementById('error1').innerText = ' ';
    }
}

function lastNameValidate() {
    var lastName = document.getElementById('lastName').value;
    if (lastName == " " || lastName == '') {
        document.getElementById('error2').innerText = 'Please Enter You Last Name'
    } else {
        document.getElementById('error2').innerText = ' ';
    }
}

function emailValidate() {
    var email = document.getElementById('email').value;
    if (email == " " || email == '') {
        document.getElementById('error3').innerText = 'Please Enter Your Email'
    } else {
        if (email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-z]{2,5})$") == null) {
            document.getElementById('error3').innerText = 'Please Enter Valid Email'
        } else {
            document.getElementById('error3').innerText = ' ';
        }
    }
}

function passValidate() {
    var password = document.getElementById('password').value;

    if (password.length < 8) {
        document.getElementById('passwordError').innerText = 'Password Min Charactor 8'
    } else {
        document.getElementById('passwordError').innerText = ' ';
    }
}

function confirmCpassValidate() {
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    if (password != confirmPassword) {
        document.getElementById('conFirmpasswordError').innerText = 'Password Does Not Match'
    } else {
        document.getElementById('conFirmpasswordError').innerText = ' ';
    }
}