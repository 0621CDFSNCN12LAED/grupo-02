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
    //check email
    let userInDB = userServices.findByEmail(req.body.email);
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
    res.redirect("./Login"); // falta el html
  },

  login: (req, res) => {
    res.render("users/login");
  },

  loginProcess: (req, res) => {
    const userToLogin = userServices.findByEmail(req.body.email);
    //si hay usuario con mail
    if (userToLogin) {
      //chequea la contraseña
      const isOkThePassword = bcryptjs.compareSync(
        req.body.password,
        userToLogin.password
      );

      //si la contraseña está bien redirigilo a su perfil
      if (isOkThePassword) {
        // delete userToLogin.password;
        // delete userToLogin.Repeat_Password;
        req.session.userLogged = userToLogin;

        if (req.body.remember) {
          res.cookie("userEmail", req.body.email, {
            maxAge: 1000 * 60,
          });
        }
        return res.redirect(
          "./" + req.session.userLogged.id /*userToLogin.id*/
        );
      }
      //si la contraseña está mal enviarle mensaje de error en la vista y email renderizado
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
    /*const userperfil = userServices.filterByID(req.params.id);
    res.render("users/profile", { userperfil });*/
    return res.render("users/profile2", { user: req.session.userLogged });
  },
  logout: (req, res) => {
    res.clearCookie("userEmail");
    req.session.destroy();
    return res.redirect("../Evento");
  },
  delete: (req, res) => {
    // userServices.deleteAvatar(req.body.avatar);
    userServices.deleteUser(req.body);
    res.clearCookie("userEmail");
    req.session.destroy();
    res.redirect("../Evento");
  },
};
