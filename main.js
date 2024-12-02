var username = document.getElementById("exampleInputUsername");
var email = document.getElementById("exampleInputEmail");
var password = document.getElementById("exampleInputPassword");
var signUpBtn = document.getElementById("signUpBtn");
userarr = [];
function signUp() {
    
    if(username.value != "" && email.value != "" && password.value != "") {
        var userData = {
            username: username.value,
            email: email.value,
            password: password.value
        }
        
        if(!hasDuplicateValues(userData)) {
            document.getElementById("error-msg").innerHTML = "All fields must be unique";
        }else{
            userarr.push(userData);

            localStorage.setItem("userData", JSON.stringify(userarr));
            document.getElementById("error-msg").innerHTML = "";
            document.getElementById("success-msg").innerHTML = "User Registered Successfully";
    
        }

    }else{
        document.getElementById("error-msg").innerHTML = "All fields are required";
    }
    


}

function hasDuplicateValues(obj) {
    const values = Object.values(obj.email  ); // Extract all values
    const uniqueValues = new Set(values); // Store unique values
    return values.length !== uniqueValues.size; // Compare lengths
  }

function login() {
    var userData = JSON.parse(localStorage.getItem("userData"));
    console.log(userData);

    for(var i = 0; i < userData.length; i++) {
        if(userData[i].email == email.value && userData[i].password == password.value) {
            localStorage.setItem("loggedInUser", userData[i].username);
            console.log(localStorage.getItem("loggedInUser"));
            window.location.href = "logged-in.html";
        }else{
            document.getElementById("error-msg").innerHTML = "Invalid username or password";

        }
    }
    
}

function logout() {
    localStorage.removeItem("loggedInUser");
    window.location.href = "login.html";
}

function displayUser() {
    var loggedInUser = localStorage.getItem("loggedInUser");
    console.log(loggedInUser);
    if(loggedInUser != null) {
        document.getElementById("logedinUser").innerHTML = loggedInUser;
    }else{
        window.location.href = "login.html";


    }
}