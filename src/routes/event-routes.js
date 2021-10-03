const express = require("express");
const router = express.Router();
const eventController = require("../controllers/event-controller");
const path = require("path");

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

router.get("/", eventController.index);

// router para CreateEvent
router.get("/CrearEvento", eventController.creatEvent);
router.post("/", uploader.single("banner"), eventController.storeEvent);

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
