function logout() {
    window.location.href = "login.html";
}

function copyTrader(name) {
    alert("You are now copying " + name + " 🚀");
}
const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");

    if (document.body.classList.contains("light-theme")) {
        toggle.textContent = "☀️";
    } else {
        toggle.textContent = "🌙";
    }
});