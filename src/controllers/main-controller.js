const fs = require("fs");
const path = require("path");

//--------------DataBase.Json---------------------------//
const productService = require("../services/events-services");

module.exports = {
  //////////////////////VISUALIZAR LAS PAGINAS PEDIDAS////////////////////////
  index: (req, res) => {
    //filterByStatus
    const openEvents = productService.filterByStatus();

    res.render("index", { title: "Deporteando", openEvents });
  },
};
