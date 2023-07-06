const dbconnection = require("../db");
const connPromise = dbconnection.promise();

const login = async (req, res) => {
  const body = req.body;
  console.log(body);
  try {
    const findUserQuery = `select * from usuarios where nombre = '${body.nombre}'`;
    const [rows] = await connPromise.query(findUserQuery);
    const user = rows[0];

    if (rows.length > 0 && user.clave === body.clave) {
      res.json({
        status: "success",
        data: rows[0],
      });
    } else {
      res.json({
        status: "error",
        message: "Usuario o contraseña incorrectos.",
      });
    }
    console.log(rows);
  } catch (e) {
    res.json({
      status: "error",
      message: e,
    });
  }
};

module.exports = {
  login,
};
