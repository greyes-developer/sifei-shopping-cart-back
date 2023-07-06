const { Router } = require("express");
const { login } = require("../controllers/users.controllers");

const router = Router();

router.post("/login", login);

module.exports = router;
