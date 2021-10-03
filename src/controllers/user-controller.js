const fs = require("fs");
const path = require("path");
const { validationResult } = require("express-validator");

//--------------DataBase.Json---------------------------//
const userService = require("../services/users-services");
const eventService = require("../services/events-services");

module.exports = {
  index: (req, res) => {
    //filterByStatus
    const openEvents = eventService.filterByStatus();
    res.render("events", { openEvents });
  },

  login: (req, res) => {
    res.render("users/login");
  },

  //////////////////////REGISTRACION Y VALIDACION DE DATOS (BACK)////////////////////////

  register: (req, res) => {
    res.render("users/register");
  },

  profile: (req, res) => {
    res.render("users/profile");
  },

  createUser: (req, res) => {
    userService.createUser(req.body);
    res.redirect("/Evento"); // falta el html
  },
};
