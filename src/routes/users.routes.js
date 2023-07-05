const { Router } = require("express");
const dbconnection = require("../db");
const connPromise = dbconnection.promise();

const router = Router();

router.get("/", async (req, res) => {
  const [rows] = await connPromise.query("select * from usuarios");
  console.log(rows);
  res.send("Hello world!!");
});

module.exports = router;
