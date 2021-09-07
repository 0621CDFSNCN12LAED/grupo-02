const express = require("express");
const router = express.Router();
const mainController = require("../controllers/main-controller");

//////////////////////VISUALIZAR LAS PAGINAS PEDIDAS////////////////////////

// router para pagina de inicio
router.get("/", mainController.index);

// router para entrar a la compra de tickets
router.get("/Carrito/:id", mainController.carrito);

// router para ver la informacion de un evento en especifico
router.get("/Producto/:id", mainController.producto);

// router para que un usuiario inicie sesion
router.get("/Login", mainController.login);

//////////////////////REGISTRACION Y VALIDACION DE DATOS////////////////////////

// router para que un usuario se registre
router.get("/Registro", mainController.register);

// post enviar los datos del usuario
router.post("/Registro", mainController.createUser);

//////////////////////CREACION Y EDICION DE PRODUCTOS////////////////////////

// router para la creacion de un producto
router.get("/CreateProduct", mainController.creacionProducto);

// router para la edicion de un producto
router.get("/editProduct/:id", mainController.edit);

module.exports = router;
