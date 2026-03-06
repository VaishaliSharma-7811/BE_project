const express = require("express");
const path = require("path");
const router = express.Router();



// Holdings route
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../views", "holdings.html"));
});

module.exports = router;

