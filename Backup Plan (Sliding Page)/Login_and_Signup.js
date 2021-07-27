document.addEventListener("DOMContentLoaded", () => {
    const LoginForm = document.querySelector("#logIn");
    const SignupForm = document.querySelector("#signUp");

    //Switch from Login page to Signup page
    document.querySelector("#linkSignup").addEventListener("click", e => {
        e.preventDefault();
        LoginForm.classList.add("form-hidden");
        SignupForm.classList.remove("form-hidden");
    });

    //Switch from Signup page to Login page
    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        SignupForm.classList.add("form-hidden");
        LoginForm.classList.remove("form-hidden");
    });

    //Validation of username and password
    document.querySelector('.login-button').onclick = function(){

        var loginEmail = document.querySelector('.loginEmail').value,
        loginPassword = document.querySelector('.loginPassword').value;

            if(loginEmail != "testemail@gmail.com" && loginPassword != "testPassword123"){
                alert("Incorrect email and password combination! Please try again.");
            }
            else if(loginEmail == "testemail@gmail.com" && loginPassword != "testPassword123"){
                alert("Incorrect password! Please try again.");
            }
            else if(loginEmail == "testemail@gmail.com" && loginPassword == "testPassword123"){
                alert("Login sucessfully!");
            }
    }

    //Validation of password and confirm password
    document.querySelector('.signup-button').onclick = function(){

        var password = document.querySelector('.password').value,
        confirmPassword = document.querySelector('.confirmPassword').value;

            if(password != confirmPassword){
                alert("Password not match! Please try again.");
                return false
            }
            else if(password == confirmPassword){
                alert("Password correct!");
            }
            return true

        }
});