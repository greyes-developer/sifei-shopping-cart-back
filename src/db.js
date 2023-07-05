// get the client
const mysql = require("mysql2");

const dbconnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Gustavo0154",
  database: "carrito_compra_reyes_gustavo",
});

dbconnection.connect(function (err) {
  if (err) console.log("connection error", err);
  console.log("Connected!");
});

module.exports = dbconnection;
