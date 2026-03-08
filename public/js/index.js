// Search interaction
const themeToggle = document.getElementById("themeToggle");
const body = document.body;

// Load saved theme
if (localStorage.getItem("theme") === "light") {
    body.classList.add("light-mode");
    themeToggle.textContent = "☀️";
}

// Toggle theme
themeToggle.addEventListener("click", () => {
    body.classList.toggle("light-mode");

    if (body.classList.contains("light-mode")) {
        localStorage.setItem("theme", "light");
        themeToggle.textContent = "☀️";
    } else {
        localStorage.setItem("theme", "dark");
        themeToggle.textContent = "🌙";
    }
});

// CTA button interaction
// document.querySelector(".cta-btn").addEventListener("click", function() {
//     alert("Welcome to Cryptovista 🚀");
// });