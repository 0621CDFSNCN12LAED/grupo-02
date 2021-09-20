const fs = require("fs");
const path = require("path");

//--------------DataBase.Json---------------------------//
const productService = require("../services/events-services");

module.exports = {
  index: (req, res) => {
    //filterByStatus
    const openEvents = productService.filterByStatus();
    res.render("events", { openEvents });
  },

  //controlador de EventDetail
  detail: (req, res) => {
    //filterByID
    const event = productService.filterByID(req.params.id);
    res.render("events/EventDetail", { event });
  },

  //controladores de CreateEvent
  creatEvent: (req, res) => {
    res.render("events/CreateEvent");
  },

  storeEvent: (req, res) => {
    //CreatOneEvent
    productService.CreatOneEvent(req.body, req.file);
    res.redirect("/Evento");
  },

  //controladores de EditEvent
  edit: (req, res) => {
    //filterByID
    const event = productService.filterByID(req.params.id);
    res.render("events/EditEvent", { event });
  },

  update: (req, res) => {
    productService.EditOneEvent(req.params.id, req.body, req.file);
    res.redirect("/Evento");
  },

  delete: (req, res) => {
    //filterByID
    const event = productService.filterByID(req.params.id);
    //DeleteOneEvent
    event.estado = "close";
    //Save
    productService.save();
    res.redirect("/Evento");
  },
  //controlador del EventCart
  carrito: (req, res) => {
    res.render("events/EventCart");
  },
};
