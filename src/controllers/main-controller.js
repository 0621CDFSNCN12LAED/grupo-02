const path = require("path");

module.exports = {
  index: (req, res) => {
    res.render("index");
  },
  carrito: (req, res) => {
    res.render("productCart");
  },
  producto: (req, res) => {
    res.render("productDetail");
  },
  login: (req, res) => {
    res.render("login");
  },
  register: (req, res) => {
    res.render("register");
  },
};
