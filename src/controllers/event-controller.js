const fs = require("fs");
const path = require("path");

//--------------DataBase.Json---------------------------//
let eventsFilePath = path.join(__dirname, "../data/eventDataBase.json");
let events = JSON.parse(fs.readFileSync(eventsFilePath, "utf-8"));

module.exports = {
  index: (req, res) => {
    //filterByStatus
    const openEvents = events.filter((event) => {
      return event.estado == "open";
    });
    res.render("events", { openEvents });
  },

  //controlador de EventDetail
  detail: (req, res) => {
    //filterByID
    const event = events.find((event) => {
      return event.id == req.params.id;
    });
    res.render("events/EventDetail", { event });
  },

  //controladores de CreateEvent
  creatEvent: (req, res) => {
    res.render("events/CreateEvent");
  },

  storeEvent: (req, res) => {
    //CreatOneEvent
    const lastEvent = events[events.length - 1];
    const biggestEventId = events.length > 0 ? lastEvent.id : 1;
    const event = {
      ...req.body,
      id: biggestEventId + 1,
      precio: Number(req.body.precio),
      banner: req.file ? req.file.filename : "evento1.jpg",
      estado: "open",
    };
    events.push(event);

    //Save
    fs.writeFileSync(eventsFilePath, JSON.stringify(events));
    res.redirect("/Evento");
  },
  //controladores de EditEvent
  edit: (req, res) => {
    //filterByID
    const event = events.find((event) => {
      return event.id == req.params.id;
    });
    res.render("events/EditEvent", { event });
  },

  update: (req, res) => {
    //filterByID
    const editEvent = events.find((event) => {
      return event.id == req.params.id;
    });

    //EditOneEvent
    editEvent.nombre = req.body.nombre;
    editEvent.provincia = req.body.provincia;
    editEvent.localidad = req.body.localidad;
    editEvent.direccion = req.body.direccion;
    editEvent.fecha = req.body.fecha;
    editEvent.horaI = req.body.horaI;
    editEvent.horaF = req.body.horaF;
    editEvent.precio = Number(req.body.precio);
    editEvent.banner = req.file ? req.file.filename : editEvent.banner;
    editEvent.descripcion = req.body.descripcion;
    editEvent.masInformacion = req.body.masInformacion;

    //Save
    fs.writeFileSync(eventsFilePath, JSON.stringify(events));
    res.redirect("/Evento");
  },

  delete: (req, res) => {
    //filterByID
    const event = events.find((event) => {
      return event.id == req.params.id;
    });
    //DeleteOneEvent
    event.estado = "close";

    //Save
    fs.writeFileSync(eventsFilePath, JSON.stringify(events));
    res.redirect("/Evento");
  },
  //controlador del EventCart
  carrito: (req, res) => {
    res.render("events/EventCart");
  },
};
