const express = require("express");
const router = express.Router();
const eventController = require("../controllers/event-controller");
const path = require("path");
const { body } = require("express-validator");

//Para tomar files y almacenarlos
const multer = require("multer");
const storage = multer.diskStorage({
  destination: path.join(__dirname, "../../public/imagenes"),
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname);
  },
});
//ejecuto la callback y le paso sin ningun error(null) el nombre del archivo
//el path.extname lo que hace es devolver la extensión desde el ultimo punto(si es un string jpg devuelve solo jpg, si no tiene extención devuelve un string vacío)
const uploader = multer({ storage });

//la validaciones del usuario que debe cumplir para poder susbcribirse a la pagina
const validations = [
  body("nombre").notEmpty().withMessage("*ingrese el nombre del evento"),

  body("localidad").notEmpty().withMessage("*ingrese la localidad"),

  body("direccion").notEmpty().withMessage("*Ingrese la direccion del evento"),

  body("fecha").notEmpty().withMessage("*Ingrese la fecha del evento"),

  body("horaI").notEmpty().withMessage("*Ingrese la hora de inicio del evento"),

  body("horaF").notEmpty().withMessage("*Ingrese la hora de finalizacion"),

  body("precio").notEmpty().withMessage("*Ingrese el precio de entrada"),

  body("descripcion")
    .notEmpty()
    .withMessage("*Ingrese una descripcion del evento"),
];

router.get("/", eventController.index);

// router para CreateEvent
router.get("/CrearEvento", eventController.creatEvent);
router.post(
  "/",
  uploader.single("banner"),
  validations,
  eventController.storeEvent
);

//router para EventDetail
router.get("/:id", eventController.detail);

//routes para EditEvent
//falta router.put para editar
router.get("/:id/editar", eventController.edit);
//router.put("/:id", uploader.single("banner"), eventController.update);
router.put("/:id", uploader.single("banner"), eventController.update);

router.delete("/:id", eventController.delete);

// router para EventCart
router.get("/Carrito/:id", eventController.carrito);

module.exports = router;
