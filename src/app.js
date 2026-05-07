const express = require("express");
const app = express();
const employeeRoutes = require("./routes/employee.routes");

app.use(express.json());

app.use("/employees", employeeRoutes);

module.exports = app;