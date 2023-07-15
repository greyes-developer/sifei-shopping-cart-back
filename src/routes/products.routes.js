const { Router } = require("express");
const {
  getProducts,
  buyProducts,
} = require("../controllers/products.controller");
const { validateJWT } = require("../middlewares/validar-jwt");

const router = Router();

router.get("/api/products", validateJWT, getProducts);
router.post("/api/buy", validateJWT, buyProducts);

module.exports = router;
