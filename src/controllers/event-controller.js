const fs = require("fs");
const path = require("path");

//--------------DataBase.Json---------------------------//
const eventService = require("../services/events-services");

module.exports = {
  index: (req, res) => {
    //filterByStatus
    const openEvents = eventService.filterByStatus();
    res.render("events", { openEvents });
  },

  //controlador de EventDetail
  detail: (req, res) => {
    //filterByID
    const event = eventService.filterByID(req.params.id);
    res.render("events/EventDetail", { event });
  },

  //controladores de CreateEvent
  creatEvent: (req, res) => {
    res.render("events/CreateEvent");
  },

  storeEvent: (req, res) => {
    //CreatOneEvent
    eventService.CreatOneEvent(req.body, req.file);
    res.redirect("/Evento");
  },

  //controladores de EditEvent
  edit: (req, res) => {
    //filterByID
    const event = eventService.filterByID(req.params.id);
    res.render("events/EditEvent", { event });
  },

  update: (req, res) => {
    eventService.EditOneEvent(req.params.id, req.body, req.file);
    res.redirect("/Evento");
  },

  delete: (req, res) => {
    //filterByID
    const event = eventService.filterByID(req.params.id);
    //DeleteOneEvent
    event.estado = "close";
    //Save
    eventService.save();
    res.redirect("/Evento");
  },
  //controlador del EventCart
  carrito: (req, res) => {
    res.render("events/EventCart");
  },
};
