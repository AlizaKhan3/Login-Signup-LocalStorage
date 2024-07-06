let email = document.getElementById("email");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirmPassword");
let passwordMatch = document.getElementById("passwordMatch");



function loginUser(){
        console.log("logged in");
        
        if(password.value === confirmPassword.value){
            passwordMatch.style.display = "block"
            // passwordMatch.style.fontSize = "6" + px
            // passwordMatch.style.color = "green"
            if(email.value.trim() != null && password.value.trim() != null){
                Swal.fire({
                    position: "top",
                    icon: "success",
                    title: "Welcome " + email.value.toLocaleUpperCase() ,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }

        }
    else if(email.value.trim() != null && password.value.trim() != null && password.value !== confirmPassword.value ){

    }
}