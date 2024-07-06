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

    //after login redirect to Dashboard
     setTimeout(()=>{
        window.location.href = "./dashboard.html"

     },2000)
}


//Dashboard Data
function getData(){
    var getData = document.getElementById("getData");
    var getDataFromLocalStorage = JSON.parse(localStorage.getItem("MyUsers"));
    console.log(getDataFromLocalStorage);
    // console.log(getDataFromLocalStotage);

    getData.innerHTML = ` <div class="container">
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
                <tr>
                    <td>John Doe</td>
                    <td>johndoe@example.com</td>
                    <td>********</td>
                    <td>123-456-7890</td>
                </tr>
                <tr>
                    <td>Jane Doe</td>
                    <td>janedoe@example.com</td>
                    <td>********</td>
                    <td>098-765-4321</td>
                </tr>
                <!-- Add more rows here -->
            </tbody>
        </table>
    </div>   `
}

getData();


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
