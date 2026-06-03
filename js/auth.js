// Password Strength Checker

const password =
document.getElementById("password");

const strength =
document.getElementById("strength");

password.addEventListener("input", () => {

    let value = password.value;

    if(value.length < 4){

        strength.innerHTML =
        "Weak Password";

        strength.style.color =
        "red";

    }
    else if(value.length < 8){

        strength.innerHTML =
        "Medium Password";

        strength.style.color =
        "orange";

    }
    else{

        strength.innerHTML =
        "Strong Password";

        strength.style.color =
        "green";

    }

});

// Login Form

const form =
document.getElementById("loginForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const email =
    document.getElementById("email").value;

    const passwordValue =
    document.getElementById("password").value;

    if(
        email === "nexus2408@gmail.com" &&
        passwordValue === "2408"
    ){

        alert("Login Successful");

        window.location.href =
        "otp.html";

    }
    else{

        alert(
        "Invalid Email or Password"
        );

    }
    localStorage.setItem(
    "isLoggedIn",
    "true"
);
});