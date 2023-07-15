const jwt = require("jsonwebtoken");

const generateJWT = (name) => {
  const payload = {
    name,
  };

  return new Promise((resolve, reject) => {
    jwt.sign(
      payload,
      "Myscrecretkey123",
      {
        expiresIn: "4h",
      },
      (error, token) => {
        if (error) {
          console.log(error);
          reject("No se pudo generar el token");
        } else {
          resolve(token);
        }
      }
    );
  });
};

module.exports = {
  generateJWT,
};
