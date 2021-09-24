const fs = require("fs");
const path = require("path");

//--------------DataBase.Json---------------------------//
const userService = require("../services/users-services");

module.exports = {
  login: (req, res) => {
    res.render("users/login");
  },

  //////////////////////REGISTRACION Y VALIDACION DE DATOS (BACK)////////////////////////

  register: (req, res) => {
    res.render("users/register");
  },

  createUser: (req, res) => {
    //const newUser = {
    // username: req.body.username,
    // email: req.body.email,
    // password: req.body.password,
    // Repeat_password: req.body.Repeat-password
    // };
    //res.send(req.body)
  },
};
