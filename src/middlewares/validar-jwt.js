const jwt = require("jsonwebtoken");
const dbconnection = require("../db");
const connPromise = dbconnection.promise();

const validateJWT = async (req, res, next) => {
  const token = req.header("x-token");

  if (!token) {
    return res.status(401).json({
      status: "error",
      message: "No hay token en la petición.",
    });
  }

  try {
    const payload = jwt.verify(token, "Myscrecretkey123");
    const findUserQuery = `select * from usuario where nombre_usuario = '${payload.name}'`;

    const [rows] = await connPromise.query(findUserQuery);
    const userExist = rows.length > 0;

    if (userExist) {
      next();
    } else {
      res.status(404).json({
        status: "error",
        message: "Token no válido",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(401).json({
      message: "Token no válido.",
    });
  }
};

module.exports = {
  validateJWT,
};
