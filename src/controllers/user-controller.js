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
    profile: (req, res) => {
        res.render("users/profile");
    },

    createUser: (req, res) => {
        userService.createUser(req.body);
        res.redirect("index"); // falta el html
    },
};