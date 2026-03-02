function logout() {
    window.location.href = "login.html";
}

/* REMOVE FUNCTION */
function removeRow(button) {
    const row = button.closest("tr");
    row.style.transition = "0.3s";
    row.style.opacity = "0";
    setTimeout(() => {
        row.remove();
    }, 300);
}

/* ADD COIN FUNCTION */
function addCoin() {
    const coin = prompt("Enter Coin Name (e.g., Solana (SOL)):");
    if (!coin) return;

    const price = prompt("Enter Current Price (e.g., 135):");
    if (!price) return;

    const change = prompt("Enter 24h Change (%) (e.g., -1.25 or 2.50):");
    if (!change) return;

    const marketCap = prompt("Enter Market Cap (e.g., 60B):");
    if (!marketCap) return;

    const tbody = document.getElementById("watchlistBody");

    const row = document.createElement("tr");

    const changeValue = parseFloat(change);
    const changeClass = changeValue >= 0 ? "green" : "red";

    row.innerHTML = `
        <td>${coin}</td>
        <td>$${price}</td>
        <td class="${changeClass}">
            ${changeValue >= 0 ? "+" : ""}${change}%
        </td>
        <td>$${marketCap}</td>
        <td><button class="remove-btn" onclick="removeRow(this)">Remove</button></td>
    `;

    tbody.appendChild(row);
}