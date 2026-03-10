const livePassword = document.getElementById("livePassword");
const confirmPassword = document.getElementById("confirmPassword");
const message = document.getElementById("message");

function validatePassword(){

    const password = livePassword.value;
    const confirm = confirmPassword.value;

    // Password validation
    if(!password){
        message.textContent = "Password is required";
        message.style.color = "red";
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

    // Confirm password check
    if(confirm && password !== confirm){
        message.textContent = "Passwords do not match";
        message.style.color = "red";
        return;
    }

    if(confirm && password === confirm){
        message.textContent = "Password matched successfully!";
        message.style.color = "green";
    }
}

livePassword.addEventListener("input", validatePassword);
confirmPassword.addEventListener("input", validatePassword);


