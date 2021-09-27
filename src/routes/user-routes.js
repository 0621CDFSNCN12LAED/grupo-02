const express = require("express");
const router = express.Router();
const userController = require("../controllers/user-controller");
const path = require("path");
const { body } = require("express-validator");

//Para tomar files y almacenarlos
const multer = require("multer");
const { equal } = require("assert");
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
  body("nombre").notEmpty().withMessage("ingrese su nombre por favor"),

  body("apellido").notEmpty().withMessage("ingrese un apellido por favor"),

  body("nacimiento").notEmpty().withMessage("Ingrese su fecha de nacimiento"),

  body("email")
    .notEmpty()
    .withMessage("escriba un email por favor")
    .bail()
    .isEmail()
    .withMessage("debes escribir un formato de correo valido"),

  body("genero").notEmpty().withMessage("Ingrese su genero por favor"),

  body("password")
    .notEmpty()
    .withMessage("Ingrese una contrseña por favor")
    .bail(),

  body("Repeat_password")
    .notEmpty()
    .withMessage("repita su contraseña por favor"),
];

//inicion
router.get("/", userController.index);
// router para que un usuiario inicie sesion
router.get("/Login", userController.login);
// router para que un usuario se registre
router.get("/Registro", userController.register);
// post enviar los datos del usuario
router.post("/", validations, userController.createUser);
//para mirar la pag de profile
router.get("/perfil", userController.profile);

module.exports = router;
