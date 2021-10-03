const express = require("express");
const router = express.Router();
const userController = require("../controllers/user-controller");
const path = require("path");
// const { body } = require("express-validator");

//Para tomar files y almacenarlos
const multer = require("multer");
const storage = multer.diskStorage({
  destination: path.join(__dirname, "../../public/imagenes/Users"),
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname);
  },
});
//ejecuto la callback y le paso sin ningun error(null) el nombre del archivo
//el path.extname lo que hace es devolver la extensión desde el ultimo punto(si es un string jpg devuelve solo jpg, si no tiene extención devuelve un string vacío)
const uploader = multer({ storage });
const userFormValidation = require("../validations/user-form-validation");
const checkValidation = require("../middlewares/check-validation");
const { Router } = require("express");
//para mirar la pag de profile

router.get("/", userController.profile);
// router para que un usuario se registre
router.get("/Registro", userController.register);
// post enviar los datos del usuario
router.post(
  "/",
  uploader.single("avatar"),
  userFormValidation,
  checkValidation,
  userController.createUser
);
// router para que un usuiario inicie sesion
router.get("/Login", userController.login);
// post enviar los datos del login
router.post("/", userController.loginProcess);

module.exports = router;
