const express = require("express");
const bodyParser = require("body-parser");
const notFound = require("./controllers/404");
const app = express();
const fileUpload = require("express-fileupload");

const spawn = require("child_process").spawn;

const employeeRoutes = require("./routes/employees");

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(fileUpload());

app.use(bodyParser.urlencoded());

app.use(employeeRoutes);
app.use(notFound);

app.listen(4500);
