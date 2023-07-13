const { Router } = require("express");
const { getProducts, buyProducts } = require("../controllers/products.controller");

const router = Router();

router.get("/api/products", getProducts);
router.post("/api/buy", buyProducts);

module.exports = router;
