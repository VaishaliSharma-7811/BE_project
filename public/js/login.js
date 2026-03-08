function login(){

let email = document.getElementById("email").value.trim();
let password = document.getElementById("password").value.trim();

let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

/* Email Empty */

if(email === ""){
alert("Please enter your email");
return;
}

/* Email Format */

if(!email.match(emailPattern)){
alert("Please enter a valid email address");
return;
}

/* Password Empty */

if(password === ""){
alert("Please enter your password");
return;
}

/* Password Length */

if(password.length < 6){
alert("Password must be at least 6 characters");
return;
}

/* Check Stored User */

let user = JSON.parse(localStorage.getItem("cryptovistaUser"));

if(!user){
alert("No account found. Please sign up.");
return;
}

/* Verify Login */

if(email === user.email && password === user.password){

alert("Login successful!");

window.location.href="/explore";

}else{

alert("Invalid email or password");

}

}