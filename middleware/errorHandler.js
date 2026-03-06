const path = require("path");

// 404 handler
const notFoundHandler = (req, res, next) => {
  res.status(404).sendFile(
    path.join(__dirname, "../views", "404.html"),
    (err) => {
      if (err) next(err);
    }
  );
};

// 500 handler
const serverErrorHandler = (err, req, res, next) => {
  console.error("Error details:", err.stack);
  res.status(500).sendFile(path.join(__dirname, "../views", "500.html"));
};

module.exports = { notFoundHandler, serverErrorHandler };
