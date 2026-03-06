const express = require("express");
const path = require("path");
const router = express.Router();

const exploreRoutes = require("./exploreRoutes");
const holdingsRoutes = require("./holdingsRoutes");
const watchlistRoutes = require("./watchlistRoutes");
const copytradingRoutes = require("./copytradingRoutes");
const loginRoutes = require("./loginRoutes");
const buyCryptoRoutes = require("./buyCryptoRoutes");
const endPageRoutes = require("./endPageRoutes");

// Home route
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../views", "index.html"));
})

router.use("/explore", exploreRoutes);
router.use("/holdings", holdingsRoutes);
router.use("/watchlist", watchlistRoutes);
router.use("/copytrading", copytradingRoutes);
router.use("/login", loginRoutes);
router.use("/buycrypto", buyCryptoRoutes);
router.use("/endpage", endPageRoutes);

router.get("/error-test", (req, res, next) => {
  next(new Error("Simulated server error"));
});

module.exports = router;