let email = document.getElementById("email");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirmPassword");
let passwordMatch = document.getElementById("passwordMatch");
let passwordNotMatched = document.getElementById("passwordNotMatched");




function loginUser() {
    let userEmail = email.value.trim();
let userPassword = password.value.trim();
    // if (userPassword === confirmPassword.value.trim()) {
    //     passwordMatch.style.display = "block"
    // }

    if (userEmail != null && userPassword.length>=8 != null && userPassword === confirmPassword.value.trim()) {
        passwordMatch.style.display = "block"
        Swal.fire({
            position: "top",
            icon: "success",
            title: "Welcome " + email.value.toLocaleUpperCase(),
            showConfirmButton: false,
            timer: 1500
        });
        console.log("logged in");
    }
    // else if (userEmail != null && userPassword.length < 8 != null && userPassword !== confirmPassword.value.trim()) {
    //     passwordNotMatched.style.display = "block"

    // }
}