// routes/signup.js
const express = require("express");
const router = express.Router();
const path = require("path");

// GET signup page
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../views", "signUp.html"));
});

module.exports = router;
