// get the client
const mysql = require("mysql2");

const dbconnection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

dbconnection.connect(function (err) {
  if (err) console.log("connection error", err);
  console.log("Connected!");
});

module.exports = dbconnection;
