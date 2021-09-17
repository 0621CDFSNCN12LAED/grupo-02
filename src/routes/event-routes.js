const express = require("express");
const router = express.Router();
const eventController = require("../controllers/event-controller");
const { body } = require("express-validator");

//////////////////////VISUALIZAR LAS PAGINAS PEDIDAS////////////////////////

// router para ver la informacion de un evento en especifico
router.get("/:id", eventController.detail);

//////////////////////CREACION Y EDICION DE PRODUCTOS////////////////////////
// router para la creacion de un producto
router.get("/CrearEvento", eventController.creacionEvento); //evento

// router para la edicion de un producto
router.get("/:id/editar", eventController.edit);

module.exports = router;
