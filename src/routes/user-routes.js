const express = require("express");
const router = express.Router();
const userController = require("../controllers/user-controller");
const uploader = require("../middlewares/user-multer");

const userFormValidation = require("../validations/user-form-validation");
const loginValidations = require("../validations/loginValidation");
const checkValidation = require("../middlewares/check-validation");
const authMiddleware = require("../middlewares/authMiddleware");
const guestMiddleware = require("../middlewares/guestMiddleware");
const checkLogin = require("../middlewares/check-login");
const emailValidation = require("../middlewares/email-validation");

//REGISTER GET
router.get("/Registro", guestMiddleware, userController.register);

//LOGIN GET
router.get("/Login", guestMiddleware, userController.login);

//CREATEUSER POST
router.post(
  "/Registro",
  uploader.single("avatar"),
  emailValidation,
  userFormValidation,
  checkValidation,
  userController.createUser
);
//LOGINPROCESS POST
router.post(
  "/Login",
  loginValidations,
  checkLogin,
  userController.loginProcess
);

//Elimina Usuario
router.delete("/Eliminar/:id", userController.delete);

//LOGOUT
router.get("/Logout", userController.logout);

//PROFILE GET
router.get("/:id", authMiddleware, userController.profile);

module.exports = router;
