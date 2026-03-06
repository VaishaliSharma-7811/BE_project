const path = require("path");

function notFoundHandler(req, res, next) {
  res.status(404).sendFile(path.join(__dirname, "../views", "404.html"));
}

function serverErrorHandler(err, req, res, next) {
  console.error(err.stack);
  res.status(500).sendFile(path.join(__dirname, "../views", "500.html"));
}

module.exports = { notFoundHandler, serverErrorHandler };