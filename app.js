const express = require("express");
const path = require("path");
const cors = require("cors");
const axios = require("axios");

const {notFoundHandler, serverErrorHandler} = require("./middleware/errorHandler");

const port = 8010;
const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, "public")));
const routes = require("./routes");

// Cached crypto prices
let cachedPrices = null;

async function fetchPrices() {
  try {
    const response = await axios.get(
      "https://api.coingecko.com/api/v3/simple/price", {
        params: {
          ids: "bitcoin,ethereum,tether,ripple",
          vs_currencies: "inr",
          include_24hr_change: "true"
        },
        timeout: 10000
      }
    );
    cachedPrices = response.data;
    console.log("Crypto prices updated:", new Date().toLocaleTimeString());
  } catch (error) {
    console.error("Error fetching crypto prices:", error.message);
  }
}

// Fetch on startup, refresh every 60 seconds (CoinGecko free tier safe)
fetchPrices();
setInterval(fetchPrices, 60000);

// API endpoint serves instantly from cache
app.get("/api/prices", (req, res) => {
  if (cachedPrices) {
    res.json(cachedPrices);
  } else {
    res.status(503).json({ error: "Prices loading, try again shortly" });
  }
});

app.use("/", routes);

app.use(notFoundHandler);
app.use(serverErrorHandler);


app.listen(port, () => {
  console.log(`server is starting st port ${port}`);
})
