const express = require("express");
const bodyParser = require("body-parser");
const notFound = require("./controllers/404");

const app = express();

const employeeRoutes = require("./routes/employees");

app.use(bodyParser.urlencoded());

app.use(employeeRoutes);
app.use(notFound);

app.listen(4000);
