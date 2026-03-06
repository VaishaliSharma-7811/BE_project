const express = require("express");
const path = require("path");
const router = express.Router();

// Explore route
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../views", "explore.html"));
});

module.exports = router;
