const fs = require("fs");
const path = require("path");
const bcryptjs = require("bcryptjs");

//--------------DataBase.Json---------------------------//
const userServices = require("../services/users-services");

module.exports = {
  //////////////////////REGISTRACION Y VALIDACION DE DATOS (BACK)////////////////////////
  register: (req, res) => {
    res.render("users/register");
  },

  createUser: (req, res) => {
    let userInDB = userServices.filterByEmail(req.body.email);
    if (userInDB) {
      return res.render("users/register", {
        errors: {
          email: {
            msg: "Este email ya está registrado",
          },
        },
        oldData: req.body,
      });
    }
    userServices.createUser(req.body, req.file);
    res.redirect("../Evento"); // falta el html
  },

  login: (req, res) => {
    res.render("users/login");
  },

  loginProcess: (req, res) => {
    const userToLogin = userServices.filterByEmail(req.body.email);
    //si hay usuario con mail
    if (userToLogin) {
      //chequea la contraseña
      const isOkThePassword = bcryptjs.compareSync(
        req.body.password,
        userToLogin.password
      );
      //si la contraseña está bien redirigilo a su perfil
      if (isOkThePassword) {
        return res.redirect("/Perfil");
      }
      //si la contraseña está mal enviarle mensaje de error en la vista
      return res.render("users/login", {
        errors: {
          password: {
            msg: "Las contraseña es incorrecta",
          },
        },
      });
    }
    //si no hay usuario con ese mail, enviarle mensaje de error en la vista
    return res.render("users/login", {
      errors: {
        email: {
          msg: "No se encuentra este email en la base de datos",
        },
      },
    });
  },

  profile: (req, res) => {
    res.render("users/profile", { user: userServices[1] });
  },

  delete: (req, res) => {
    userServices.deleteUser(req.body);
    res.redirect("../Evento");
  },
};
