document.addEventListener("DOMContentLoaded", () => {
    const LoginForm = document.querySelector("#logIn");
    const SignupForm = document.querySelector("#signUp");
    const UsernameInput = document.querySelector('.signupUsername');
    const EmailInput = document.querySelector('.signupEmail');
    const PasswordInput = document.querySelector('.password');
    const ConfirmPassInput = document.querySelector('.confirmPassword');
    const ForgetPassEmail = document.querySelector('.forget_pass-input');

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

    //Validation of information in signup page and save into local storage
    document.querySelector('.signup-button').onclick = function(){

        var password = PasswordInput.value,
        confirmPassword = ConfirmPassInput.value,
        username = UsernameInput.value,
        email = EmailInput.value;

        if(username.length >=15){
            alert("Username should be less than 15 characters!");
            return false;
        }
        if(username.length <=4){
            alert("Username should be more than 5 characters!");
            return false;
        }
        if(email == localStorage.su_email){
            alert("This email has been used!");
            return false;
        }
        if(password == ""){
            alert("Password could not be empty!");
            return false;
        }
        if(password != confirmPassword){
            alert("Password not match! Please try again.");
            return false;
        }
        if(username != null && email != null && password == confirmPassword){
            localStorage.su_username = username;
            localStorage.su_email = email;
            localStorage.su_password = password;
            alert("Signup sucessfully!");
            return true;
        }
    };

    //Validation of username and password in login page
    document.querySelector('.login-button').onclick = function(event){
        
        event.preventDefault();
        var loginEmail = document.querySelector('.loginEmail').value,
        loginPassword = document.querySelector('.loginPassword').value;

            if(loginEmail != localStorage.su_email && loginPassword != localStorage.su_password){
                alert("Incorrect email and password combination! Please try again.");
                return false;
            }
            else if(loginEmail == localStorage.su_email && loginPassword != localStorage.su_password){
                alert("Incorrect password! Please try again.");
                return false;
            }
            else if(loginEmail == localStorage.su_email && loginPassword == localStorage.su_password){
                alert("Login sucessfully!");
                //Link to home page
                window.location.href="http://localhost:5501/homepage.html";
            }
    };

    //Forget password
    document.querySelector('.forget_pass-button').onclick = function(){

        var forgetEmail = ForgetPassEmail.value;

            if(forgetEmail == localStorage.su_email){
                alert("Dear " + localStorage.su_username + ", your password is " + localStorage.su_password);
                return false;
            }
            if(forgetEmail != localStorage.su_email){
                alert("Invalid email!");
                return false;
            }
    }
});

