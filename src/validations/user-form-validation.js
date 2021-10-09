const { body } = require("express-validator");

//la validaciones del usuario que debe cumplir para poder susbcribirse a la pagina
module.exports = [
  body("nombre").notEmpty().withMessage("Ingrese su nombre por favor"),

  body("apellido").notEmpty().withMessage("Ingrese un apellido por favor"),

  body("nacimiento").notEmpty().withMessage("Ingrese su fecha de nacimiento"),

  body("email")
    .notEmpty()
    .withMessage("Escriba un email por favor")
    .bail()
    .isEmail()
    .withMessage("Debes escribir un formato de correo valido"),

  body("genero").notEmpty().withMessage("Ingrese su genero por favor"),

  body("tipoDeUsuario").isIn(["Participante", "Organizador"]),

  body("password")
    .notEmpty()
    .withMessage("Ingrese una contrseña por favor")
    .bail()
    .isStrongPassword()
    .withMessage("La contraseña es muy débil")
    .bail()
    .custom((value, { req }) => {
      if (value != req.body.Repeat_password) {
        throw new Error("Las contraseñas no coinciden");
      }
      return true;
    }),
];
