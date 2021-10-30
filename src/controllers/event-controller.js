const fs = require("fs");
const path = require("path");
const { validationResult } = require("express-validator");
const { Op } = require("sequelize");

//--------------DataBase.Json---------------------------//
const eventService = require("../services/events-services");
const db = require("../database/models");

module.exports = {
  search: async (req, res) => {
    const provinces = await db.Province.findAll();
    const events = await db.Event.findAll(
      { include: ["provinces"] },
      {
        where: {
          event_name: { [Op.like]: `%${req.query.event_name}%` },
          province: { [Op.like]: `%${req.query.provincia}%` },
          event_date: { [Op.like]: `%${req.query.event_date}%` },
        },
      }
    );

    if (events.length > 0) {
      res.render("events", { events, provinces });
    } else {
      res.send("eventos no encontrados");
    }
  },

  index: async (req, res) => {
    const events = await db.Event.findAll({ where: { eventOpen: 1 } });
    res.render("events", { events });
    //filterByStatus
    //const openEvents = eventService.filterByStatus();
    //res.render("events", { openEvents });
  },

  //controlador de EventDetail
  detail: async (req, res) => {
    //filterByID
    const event = await db.Event.findByPk(req.params.id);
    res.render("events/EventDetail", { event });
  },

  //controladores de CreateEvent
  creatEvent: async (req, res) => {
    const provinces = await db.Province.findAll();
    res.render("events/CreateEvent", { provinces });
  },

  storeEvent: (req, res) => {
    //validaciones del usuario al ingresar informacion
    const resultValidation = validationResult(req);

    if (resultValidation.errors.length > 0) {
      return res.render("events/CreateEvent", {
        errors: resultValidation.mapped(),
        oldData: req.body,
      });
    }
    //CreatOneEvent
    eventService.CreatOneEvent(req.body, req.file);
    res.redirect("/Evento");
  },

  //controladores de EditEvent
  edit: async (req, res) => {
    //filterByID
    const event = await db.Event.findByPk(req.params.id);
    res.render("events/EditEvent", { event });
  },

  update: (req, res) => {
    //eventService.EditOneEvent(req.params.id, req.body, req.file);
    db.Event.update(
      {
        event_name: req.body.event_name,
        event_address: req.body.event_address,
        event_date: req.body.event_date,
        start_time: req.body.start_time,
        end_time: req.body.end_time,
        price: req.body.price,
        event_description: req.body.event_description,
        more_info: req.body.more_info,
      },
      { where: { id: req.params.id } }
    );
    res.redirect("/Evento");
  },

  delete: (req, res) => {
    //filterByID
    //const event = eventService.filterByID(req.params.id);
    //DeleteOneEvent
    //event.estado = "close";
    //Save
    //eventService.save();
    db.Event.update(
      {
        eventOpen: 0,
      },
      {
        where: { id: req.params.id },
      }
    );
    res.redirect("/Evento");
  },
  //controlador del EventCart
  carrito: (req, res) => {
    res.render("events/EventCart");
  },
};
