function logout() {
    window.location.href = "login.html";
}
// const toggleBtn = document.getElementById("themeToggle");

// // Load saved theme
// if (localStorage.getItem("theme") === "light") {
//     document.body.classList.add("light-mode");
//     toggleBtn.textContent = "☀️";
// }

// toggleBtn.addEventListener("click", () => {
//     document.body.classList.toggle("light-mode");

//     if (document.body.classList.contains("light-mode")) {
//         toggleBtn.textContent = "☀️";
//         localStorage.setItem("theme", "light");
//     } else {
//         toggleBtn.textContent = "🌙";
//         localStorage.setItem("theme", "dark");
//     }
// });
const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");

    if (document.body.classList.contains("light-theme")) {
        toggle.textContent = "☀️";
    } else {
        toggle.textContent = "🌙";
    }
});