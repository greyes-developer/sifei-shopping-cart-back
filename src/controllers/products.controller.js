const dbconnection = require("../db");
const connPromise = dbconnection.promise();

const getProducts = async (req, res) => {
  try {
    const [rows] = await connPromise.query(`select * from productos`);

    res.json({
      status: "success",
      data: rows,
    });
  } catch (e) {
    res.json({
      status: "error",
      error: e,
    });
  }
};

module.exports = {
  getProducts,
};
