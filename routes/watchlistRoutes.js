const express = require("express");
const path = require("path");
const router = express.Router();

// Watchlist route
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../views", "watchlist.html"));
});

module.exports = router;
