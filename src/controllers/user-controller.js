const fs = require("fs");
const path = require("path");

const usersFilePath = path.join(__dirname, "../data/userDataBase.json");
const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));

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
