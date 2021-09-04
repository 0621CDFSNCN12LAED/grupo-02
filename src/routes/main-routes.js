const express = require("express");
const router = express.Router();
const mainController = require("../controllers/main-controller");

router.get("/", mainController.index);
router.get("/Carrito/:id", mainController.carrito);
router.get("/Producto/:id", mainController.producto);
router.get("/Login", mainController.login);
router.get("/Registro", mainController.register);
router.get("/CreateProduct", mainController.creacionProducto);

module.exports = router;
