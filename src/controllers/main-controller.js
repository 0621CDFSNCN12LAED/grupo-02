const fs = require("fs");
const path = require("path");

//--------------DataBase.Json---------------------------//
const productService = require("../services/events-services");
const db = require("../database/models");

module.exports = {
  //////////////////////VISUALIZAR LAS PAGINAS PEDIDAS////////////////////////
  index: async (req, res) => {
    //filterByStatus
    //const openEvents = productService.filterByStatus();
    const event = await db.Event.findAll();
    res.render("index", { event });
    //res.render("index", { title: "Deporteando", openEvents });
  },
};
