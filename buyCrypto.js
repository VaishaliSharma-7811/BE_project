function logout() {
    window.location.href = "login.html";
}

function calculateTotal() {
    const price = document.getElementById("coinSelect").value;
    const qty = document.getElementById("quantity").value;
    const total = price * qty;

    document.getElementById("total").innerText = total ? total.toFixed(2) : 0;
}

function buyCrypto() {
    const qty = document.getElementById("quantity").value;

    if (!qty || qty <= 0) {
        alert("Please enter valid quantity.");
        return;
    }

    alert("Purchase Successful 🚀");
}
