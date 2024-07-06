let email = document.getElementById("email");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirmPassword");
let passwordMatch = document.getElementById("passwordMatch");
let passwordNotMatched = document.getElementById("passwordNotMatched");

function loginUser() {
    let userEmail = email.value.trim();
    let userPassword = password.value.trim();
    let confirmPasswordValue = confirmPassword.value.trim();


    var storage = localStorage.getItem("MyUsers");
    var arr = JSON.parse(storage);
    if(!arr){
        arr = [];
    }
    var MyUsers = {
        email: email.value,
        password: password.value
    }
    
    arr.push(MyUsers);
    localStorage.setItem("MyUsers", JSON.stringify(arr))

console.log(userEmail.value);
console.log(userPassword.value);


    if (userEmail !== "" && userPassword.length >= 8 && userPassword === confirmPasswordValue) {
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
    } else if (userEmail !== "" && userPassword.length < 8) {
        passwordLength.style.display = "block";
        passwordMatch.style.display = "none";
        passwordNotMatched.style.display = "none";
    } else if (userEmail !== "" && userPassword !== confirmPasswordValue) {
        passwordNotMatched.style.display = "block";
        passwordMatch.style.display = "none";
    } else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href="#">Why do I have this issue?</a>'
        });
    }
    userEmail = "";
    userPassword = "";
}

// function signupUser() {
//     let signupForm = document.createElement("div");
//     signupForm.id = "signupForm";
//     signupForm.className = "container d-flex justify-content-center login shadow-lg p-3 mb-5 rounded";
//     signupForm.innerHTML = ``;
//     document.body.appendChild(signupForm);
//     console.log("signed up");
// }




function signupUser() {
    // Get the login form element
    let loginForm = document.getElementById("loginForm");
    // Hide the login form
    loginForm.style.display = "none";

    // Create the signup form element
    // let signupForm = document.createElement("div");

    window.open("signup.html","_parent");
    // document.body.appendChild(signupForm);
    console.log("signed up");
}