const express = require("express");
const router = express.Router();
const mainController = require("../controllers/main-controller");

router.get("/", mainController.index);
router.get("/Carrito", mainController.carrito);
router.get("/Producto", mainController.producto);
router.get("/Login", mainController.login);
router.get("/Registro", mainController.register);

module.exports = router;
