const express = require("express");
const axios = require("axios");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from this same folder (BE_project)
app.use(express.static(__dirname));

// ─── Coins we track ───
const COIN_IDS = "bitcoin,ethereum,tether,ripple";

// ─── API: Live Prices (INR) ───
app.get("/api/prices", async (req, res) => {
    try {
        const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&ids=${COIN_IDS}&order=market_cap_desc&sparkline=true&price_change_percentage=24h`;
        const response = await axios.get(url);
        res.json(response.data);
    } catch (error) {
        console.error("Error fetching prices:", error.message);
        res.status(500).json({ error: "Failed to fetch prices" });
    }
});

// ─── Root serves landing page ───
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// ─── Start Server ───
app.listen(PORT, () => {
    console.log(`\n🚀 CryptoVista server running at http://localhost:${PORT}\n`);
});
