const { Router } = require("express");
const { body } = require("express-validator");
const { login } = require("../controllers/users.controllers");
const validate = require("../middlewares/validate-fields");

const router = Router();

router.post(
  "/login",
  validate([
    body("nombre").notEmpty().withMessage("This field cannot be empty."),
    body("clave").notEmpty().withMessage("This field cannot be empty."),
    body("clave")
      .isLength({ min: 6 })
      .withMessage("This field must have at least 6 characters."),
  ]),
  login
);

module.exports = router;
