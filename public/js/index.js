// Search interaction
document.getElementById("searchInput").addEventListener("keyup", function(e) {
    if (e.key === "Enter") {
        alert("Searching for: " + this.value);
    }
});
const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");

    if (document.body.classList.contains("light-theme")) {
        toggle.textContent = "☀️";
    } else {
        toggle.textContent = "🌙";
    }
});

// CTA button interaction
// document.querySelector(".cta-btn").addEventListener("click", function() {
//     alert("Welcome to Cryptovista 🚀");
// });