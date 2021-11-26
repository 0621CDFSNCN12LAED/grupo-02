const express = require("express");
const router = express.Router();
const eventController = require("../../controllers/api/eventController");

router.get("/events", eventController.list);
router.get("/events/:id", eventController.detail);
router.post("/events", eventController.create);
router.delete("/events/:id", eventController.destroy);

module.exports = router;
