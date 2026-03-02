let isLogin = true;

const toggleText = document.getElementById("toggleText");
const formTitle = document.getElementById("formTitle");
const submitBtn = document.getElementById("submitBtn");
const nameField = document.getElementById("nameField");

toggleText.addEventListener("click", function() {
    isLogin = !isLogin;

    if (isLogin) {
        formTitle.innerText = "Login";
        submitBtn.innerText = "Login";
        nameField.style.display = "none";
        toggleText.innerHTML = `Don't have an account? <span>Sign Up</span>`;
    } else {
        formTitle.innerText = "Sign Up";
        submitBtn.innerText = "Sign Up";
        nameField.style.display = "block";
        toggleText.innerHTML = `Already have an account? <span>Login</span>`;
    }
});

submitBtn.addEventListener("click", function() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!email || !password) {
        alert("Please fill all required fields.");
        return;
    }

    if (!isLogin) {
        const username = document.getElementById("username").value;
        if (!username) {
            alert("Please enter your name.");
            return;
        }
        alert("Signup Successful 🚀");
    } else {
        alert("Login Successful 🚀");
    }
});
