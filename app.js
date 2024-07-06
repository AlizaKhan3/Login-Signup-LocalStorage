let email = document.getElementById("email");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirmPassword");
let passwordMatch = document.getElementById("passwordMatch");
let passwordNotMatched = document.getElementById("passwordNotMatched");

function loginUser() {
    let userEmail = email.value.trim();
    let userPassword = password.value.trim();
    let confirmPasswordValue = confirmPassword.value.trim();

    if (userEmail!== "" && userPassword.length >= 8 && userPassword === confirmPasswordValue) {
        passwordMatch.style.display = "block";
        passwordNotMatched.style.display = "none";
        Swal.fire({
            position: "top",
            icon: "success",
            title: "Welcome " + email.value.toLocaleUpperCase(),
            showConfirmButton: false,
            timer: 1500
        });
        // console.log("logged in");
    } else if (userEmail!== "" && userPassword.length < 8) {
        passwordLength.style.display = "block";
        passwordMatch.style.display = "none";
        passwordNotMatched.style.display = "none";
    } else if (userEmail!== "" && userPassword!== confirmPasswordValue) {
        passwordNotMatched.style.display = "block";
        passwordMatch.style.display = "none";
    }
}



function signupUser(){
    let signupForm = document.getElementById("signupForm");
    signupForm.innerHTML = `
    `
    console.log("signed up")
}