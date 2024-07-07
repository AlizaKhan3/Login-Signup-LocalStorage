let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let email = document.getElementById("email");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirmPassword");
let passwordMatch = document.getElementById("passwordMatch");
let passwordNotMatched = document.getElementById("passwordNotMatched");

function registerUser(){
    event.preventDefault();
    let userFirstName = firstName.value.trim();
    let userLastName = lastName.value.trim();
    let userEmail = email.value.trim();
    let userPassword = password.value.trim();
    let confirmPasswordValue = confirmPassword.value.trim();
    let fullName = userFirstName + " " + userLastName;

    if (userFirstName !== "" && userLastName !== "" && userEmail !== "" && userPassword.length >= 8 && userPassword === confirmPasswordValue) {
        passwordMatch.style.display = "block";
        passwordNotMatched.style.display = "none";
        Swal.fire({
            position: "top",
            icon: "success",
            title: "Registered Successfully!",
            text: "Welcome " + fullName.toLocaleUpperCase(),
            showConfirmButton: false,
            timer: 2000
        });
        setTimeout(() => {   //if all data is correct move to dashboard
            window.location.href = "./dashboard.html"
        }, 2000)
        // console.log("logged in");
    } else if (userFirstName !== "" && userLastName !== "" && userEmail !== "" && userPassword.length < 8) {
        passwordLength.style.display = "block";
        passwordMatch.style.display = "none";
        passwordNotMatched.style.display = "none";
    } else if (userFirstName !== "" && userLastName !== "" && userEmail !== "" && userPassword !== confirmPasswordValue) {
        passwordNotMatched.style.display = "block";
        passwordMatch.style.display = "none";
    } else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please enter Username or Password!",
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
        password: password.value,
        firstName: firstName.value,
        lastName: lastName.value
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
                <td>${user.firstName}</td>
                <td>${user.lastName}</td>
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
                        <th>First Name</th>
                        <th>Last Name </th>
                        <th>Email</th>
                        <th>Password</th>
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
    // localStorage.clear();
    setTimeout(()=>{
        window.location.href = "./index.html"
    },2000);
}


function LoginUser(){
    event.preventDefault();
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    var checkDataFromLocalStorage = JSON.parse(localStorage.getItem("MyUsers"));
    //if user is not registered before and tris to login then show
    if(!checkDataFromLocalStorage){
        Swal.fire({
            icon: "error",
            text: "User Not Found!",
        });
        setTimeout (()=> {
            window.location.href ="index.html"
        },3000)
    }
    //present data wont matched with entered details
    if (checkDataFromLocalStorage.email !== email.value) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Invalid Email",
        });
    } else if (checkDataFromLocalStorage.password !== password.value) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Invalid Password",
        });
    }

    else {
        Swal.fire({
            icon: "success",
            title: "Logged in Successfully!",
            showConfirmButton: false,
            timer: 2000
        });
        setTimeout(() => {   //if all data is correct move to dashboard
            window.location.href = "./dashboard.html"
        }, 2000)
    }
}