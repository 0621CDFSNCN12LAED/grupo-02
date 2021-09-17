const express = require("express");
const router = express.Router();
const mainController = require("../controllers/main-controller");
const { body } = require("express-validator");

//////////////////////VISUALIZAR LAS PAGINAS PEDIDAS////////////////////////

// router para pagina de inicionp
router.get("/", mainController.index);

// router para entrar a la compra de tickets
router.get("/Carrito/:id", mainController.carrito); //evento

// router para que un usuiario inicie sesion
router.get("/Login", mainController.login); //de usuario

//////////////////////CREACION Y EDICION DE PRODUCTOS////////////////////////

//////////////////////REGISTRACION Y VALIDACION DE DATOS////////////////////////

// router para que un usuario se registre
router.get("/Registro", mainController.register); //de usuario

// post enviar los datos del usuario
router.post("/Registro", mainController.createUser); //de usuario

//////////////////////CREACION Y EDICION DE PRODUCTOS////////////////////////

// borrar evento
router.delete("/:id", mainController.delete);

module.exports = router;
