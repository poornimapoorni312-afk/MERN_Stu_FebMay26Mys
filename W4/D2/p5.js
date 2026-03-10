const signupForm = document.getElementById("signupForm");
const signupEmail = document.getElementById("signupEmail");
const signupPassword = document.getElementById("signupPassword");
const message = document.getElementById("message");

signupForm.addEventListener("submit", function(event){
    event.preventDefault();

    const email = signupEmail.value.trim();
    const password = signupPassword.value.trim();

    // Email validation
    if(!email){
        message.textContent = "Email is required";
        message.style.color = "red";
        signupEmail.focus();
        return;
    }

    // Check email format
    if(!email.includes("@")){
        message.textContent = "Enter valid email";
        message.style.color = "red";
        signupEmail.focus();
        return;
    }

    // Password validation
    if(!password){
        message.textContent = "Password is required";
        message.style.color = "red";
        signupPassword.focus();
        return;
    }

    // Password length
    if(password.length < 8){
        message.textContent = "Password must be at least 8 characters";
        message.style.color = "red";
        return;
    }

    // Check UPPERCASE characters
    if(!/[A-Z]/.test(password)){
        message.textContent = "Password must contain uppercase letter";
        message.style.color = "red";
        return;
    }

    // Check lowercase characters
    if(!/[a-z]/.test(password)){
        message.textContent = "Password must contain lowercase letter";
        message.style.color = "red";
        return;
    }

    // Check number
    if(!/[0-9]/.test(password)){
        message.textContent = "Password must contain a number";
        message.style.color = "red";
        return;
    }

    // Check special characters
    if(!/[!@#$%^&*]/.test(password)){
        message.textContent = "Password must contain special character";
        message.style.color = "red";
        return;
    }

    message.textContent = "Signup successful!";
    message.style.color = "green";
});

//clear message on input
signupEmail.addEventListener("input",() => message.textContent = "");
signupPassword.addEventListener("input",() => message.textContent = "");

