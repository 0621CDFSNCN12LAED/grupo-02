const express = require("express");
const router = express.Router();
const mainController = require("../controllers/main-controller");
const { body } = require("express-validator");

//////////////////////VISUALIZAR LAS PAGINAS PEDIDAS////////////////////////

// router para pagina de inicionp
router.get("/", mainController.index);

// router para entrar a la compra de tickets
router.get("/Carrito/:id", mainController.carrito);

// router para ver la informacion de un evento en especifico
router.get("/Evento/:id", mainController.detail);

// router para que un usuiario inicie sesion
router.get("/Login", mainController.login);

//////////////////////REGISTRACION Y VALIDACION DE DATOS////////////////////////

// router para que un usuario se registre
router.get("/Registro", mainController.register);

// post enviar los datos del usuario
router.post("/Registro", mainController.createUser);

//////////////////////CREACION Y EDICION DE PRODUCTOS////////////////////////

// router para la creacion de un producto
router.get("/CrearEvento", mainController.creacionEvento);

// router para la edicion de un producto
router.get("/Evento/:id/editar", mainController.edit);

module.exports = router;
