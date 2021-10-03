const { body } = require("express-validator");

const eventValidations = [
  body("nombre").notEmpty().withMessage("ingrese el nombre del evento"),

  body("localidad").notEmpty().withMessage("ingrese la localidad"),

  body("direccion").notEmpty().withMessage("Ingrese la direccion del evento"),

  body("fecha").notEmpty().withMessage("Ingrese la fecha del evento"),

  body("horaI").notEmpty().withMessage("Ingrese la hora de inicio del evento"),

  body("horaF").notEmpty().withMessage("Ingrese la hora de finalizacion"),

  body("precio").notEmpty().withMessage("Ingrese el precio de entrada"),

  body("descripcion")
    .notEmpty()
    .withMessage("Ingrese una descripcion del evento"),
];

module.exports = eventValidations;
