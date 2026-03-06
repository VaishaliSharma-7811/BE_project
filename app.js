const express = require("express");
const path = require("path");

const {notFoundHandler, serverErrorHandler} = require("./middleware/errorHandler");

const port = 8010;
const app = express();

app.use(express.static(path.join(__dirname, "public")));
const routes = require("./routes");
const { notFoundHandler, serverErrorHandler } = require("./BE_project/middleware/errorHandler");
app.use("/", routes);

app.use(notFoundHandler);
app.use(serverErrorHandler);


app.listen(port, () => {
  console.log(`server is starting st port ${port}`);
})
