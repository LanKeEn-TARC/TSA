document.addEventListener("DOMContentLoaded", () => {
    const LoginForm = document.querySelector("#logIn");
    const SignupForm = document.querySelector("#signUp");
    const UsernameInput = document.querySelector('.signupUsername');
    const EmailInput = document.querySelector('.signupEmail');
    const PasswordInput = document.querySelector('.password');
    const ConfirmPassInput = document.querySelector('.confirmPassword');
    const ForgetPassEmail = document.querySelector('.forget_pass-input');
    var proHistory = JSON.parse(localStorage.getItem('profileAccounts'));
    var ProfileAcc = proHistory || [];
    let allAcc = JSON.parse(localStorage.getItem('profileAccounts'));

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

    async function findEmail(email){
        var user = await allAcc && allAcc.find(items => email == items.acc_email)
        if(user){
            return user.acc_email;
        }
    }

    //Validation of information in signup page and save into local storage
    document.querySelector('.signup-button').onclick = async function(){

        var password = PasswordInput.value,
        confirmPassword = ConfirmPassInput.value,
        username = UsernameInput.value,
        email = EmailInput.value;
        const compareEmail = await findEmail(email);

        if(username.length >=15){
            alert("Username should be less than 15 characters!");
            return false;
        }
        if(username.length <=4){
            alert("Username should be more than 5 characters!");
            return false;
        }
        if(email == compareEmail){
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
            let acc = {
                acc_name: username,
                acc_email: email,
                acc_pass: password
            }
            addAccToLocalStorage(acc);
            alert("Signup successfully!")
        }
    };

    function addAccToLocalStorage(profileAccount){
        ProfileAcc.push(profileAccount);
        localStorage.setItem('profileAccounts', JSON.stringify(ProfileAcc));
    }

    //Validation of username and password in login page
    document.querySelector('.login-button').onclick = async function(event){

        event.preventDefault();
        var loginEmail = document.querySelector('.loginEmail').value,
        loginPassword = document.querySelector('.loginPassword').value;

        var user = await allAcc.find(items => loginEmail == items.acc_email && loginPassword == items.acc_pass)
        if(user){
            alert("Login Successfully!");
            localStorage.su_email = user.acc_email;
            localStorage.su_username = user.acc_name;
            localStorage.su_password = user.acc_pass;
            console.log(localStorage.su_email + localStorage.su_username + localStorage.su_password);
            window.location.href = "http://localhost:5501/homepage.html";
        }
        else{
            alert("Invalid credential");
        }
    };

    //Forget password
    document.querySelector('.forget_pass-button').onclick = async function(event){

        event.preventDefault();
        var forgetEmail = ForgetPassEmail.value;

        var user = await allAcc.find(items => forgetEmail == items.acc_email)
        console.log(user);
        if(user){
            alert("Dear " + user.acc_name + ", your password is " + user.acc_pass);
            return false;
        }
        else{
            alert("Invalid credential");
        }
    }
});

