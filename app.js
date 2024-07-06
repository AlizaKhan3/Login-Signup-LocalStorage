let email = document.getElementById("email");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirmPassword");
let passwordMatch = document.getElementById("passwordMatch");
let passwordNotMatched = document.getElementById("passwordNotMatched");

function loginUser() {
    let userEmail = email.value.trim();
    let userPassword = password.value.trim();
    let confirmPasswordValue = confirmPassword.value.trim();


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
        setTimeout(() => {   //if all data is correct move to dashboard
            window.location.href = "./dashboard.html"
    
        }, 2000)
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


    //setting up local storage data
    var storage = localStorage.getItem("MyUsers");
    //convert string to object
    var arr = JSON.parse(storage);
    if (!arr) {
        arr = [];
    }
    //Object of MyUsers
    var MyUsers = {
        email: email.value,
        password: password.value
    }
    //push new user to MyUsers
    arr.push(MyUsers);
    //convert object type to String
    localStorage.setItem("MyUsers", JSON.stringify(arr));
}

//Dashboard Data
function getData() {
    var getData = document.getElementById("getData");  //called get data div by its ID namme
    var getDataFromLocalStorage = JSON.parse(localStorage.getItem("MyUsers"));
    console.log(getDataFromLocalStorage);

    var tableBody = " ";
    getDataFromLocalStorage.forEach(function (user) {
        tableBody += `<tr>
                <td>${user.email}</td>
                <td>${user.email}</td>
                <td>********</td>
                <td></td>
            </tr>
        `;
    });

    getData.innerHTML = `
        <div class="container">
            <h2>Student Dashboard</h2>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Phone Number</th>
                    </tr>
                </thead>
                <tbody>
                    ${tableBody}
                </tbody>
            </table>
        </div>`;
}
getData();


function logout(){
    localStorage.clear();
    setTimeout(()=>{
        window.location.href = "./index.html"
    },2000);
}


function signupUser(){
    // setTimeout(()=>{
        window.location.href = "./signup.html"
    // },2000)
}


// function signupUser() {
//     // Get the login form element
//     let loginForm = document.getElementById("loginForm");
//     // Hide the login form
//     loginForm.style.display = "none";

//     // Create the signup form element
//     // let signupForm = document.createElement("div");

//     window.open("signup.html", "_parent");
//     // document.body.appendChild(signupForm);
//     console.log("signed up");

// }
