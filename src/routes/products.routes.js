const { Router } = require("express");
const { getProducts } = require("../controllers/products.controller");

const router = Router();

router.get("/products", getProducts);

module.exports = router;
