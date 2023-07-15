const dbconnection = require("../db");
const connPromise = dbconnection.promise();

const getProducts = async (req, res) => {
  try {
    const getProductsQuery = "select * from producto";
    const [products] = await connPromise.query(getProductsQuery);

    res.json({
      status: "success",
      data: products,
    });
  } catch (e) {
    res.status(400).json({
      status: "error",
      message: e,
    });
  }
};

const buyProducts = async (req, res) => {
  try {
    const body = req.body;

    const createPurchaseQuery = `insert into compra (total, fecha_compra, identificador, estatus) values (${body.total}, '${body.fecha_compra}', '${body.compra_ref}', 'compra')`;
    const [createPurchaseResult] = await connPromise.query(createPurchaseQuery);

    body.productos.forEach(async (item) => {
      const { id_producto, cantidad_disponible, cantidad_a_comprar } = item;

      let updateAvailableQuantityQuery = `update producto set cantidad_disponible = ${
        cantidad_disponible - cantidad_a_comprar
      } where id_producto = ${id_producto}`;
      await connPromise.query(updateAvailableQuantityQuery);
    });

    res.json({
      status: "success",
      data: {
        compra_id: createPurchaseResult.insertId,
        mensaje: "compra exitosa",
        fecha_recepcion: body.fecha_compra,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "error",
      message: e,
    });
  }
};

module.exports = {
  getProducts,
  buyProducts,
};
