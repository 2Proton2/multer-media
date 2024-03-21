const { createServer } = require("http");
const express = require("express");
const app = express();
const httpServer = createServer(app);
const useEmployeeRoutes = require("./routes/employee.routes.js");

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

app.use('/api/v1/employees', useEmployeeRoutes);

module.exports = {
    httpServer
};