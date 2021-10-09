const { body } = require("express-validator");

const loginValidations = [
  body("email")
    .notEmpty()
    .withMessage("Escriba un email por favor")
    .bail()
    .isEmail()
    .withMessage("Debes escribir un formato de correo valido"),
  body("password").notEmpty().withMessage("Ingrese una contrseña por favor"),
];

module.exports = loginValidations;
