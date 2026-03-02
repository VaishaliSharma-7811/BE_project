document.getElementById("getStarted").addEventListener("click", function(){
        alert("Welcome to CryptoVista 🚀");
    });

    document.getElementById("loginBtn").addEventListener("click", function(){
        window.location.href = "login.html";
    });

    document.getElementById("searchInput").addEventListener("keypress", function(e){
        if(e.key === "Enter"){
            let value = this.value.trim();
            if(value === ""){
                alert("Please enter a coin name.");
            } else {
                alert("Searching for: " + value);
            }
        }
    });

    function goToLogin() {
        window.location.href = "login.html";
    }