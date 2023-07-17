const dbconnection = require("../db");
const { generateJWT } = require("../helpers/generateJWT");
const connPromise = dbconnection.promise();

const login = async (req, res) => {
  const body = req.body;

  try {
    const findUserQuery = `select * from usuario where nombre_usuario = '${body.nombre}' and clave = '${body.clave}'`;
    const [rows] = await connPromise.query(findUserQuery);
    const userExist = rows.length > 0;

    if (userExist) {
      const user = rows[0];
      //Generate JSON Web Token JWT
      const token = await generateJWT(body.nombre);
      const { id_usuario, nombre_usuario } = user;
      res.json({
        status: "success",
        data: {
          id_usuario,
          nombre_usuario,
        },
        token,
      });
    } else {
      res.status(404).json({
        status: "error",
        message: "Usuario o contraseña incorrectos.",
      });
    }
  } catch (e) {
    res.status(400).json({
      status: "error",
      message: e,
    });
  }
};

module.exports = {
  login,
};
