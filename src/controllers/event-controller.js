const fs = require("fs");
const path = require("path");

//--------------DataBase.Json---------------------------//
const eventsFilePath = path.join(__dirname, "../data/eventDataBase.json");
const events = JSON.parse(fs.readFileSync(eventsFilePath, "utf-8"));

module.exports = {
  //controlador de EventDetail
  detail: (req, res) => {
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
    const lastEvent = events[events.length - 1];
    const biggestEventId = events.length > 0 ? lastEvent.id : 1;
    const event = {
      ...req.body,
      id: biggestEventId + 1,
      precio: Number(req.body.precio),
      banner: req.file.filename,
      estado: "open",
    };
    events.push(event);
    fs.writeFileSync(eventsFilePath, JSON.stringify(events));
    res.redirect("/");
  },
  //controladores de EditEvent
  edit: (req, res) => {
    const event = events.find((event) => {
      return event.id == req.params.id;
    });
    res.render("events/EditEvent", { event });
  },

  updateEdit: (req, res) => {
    const event = events.find((event) => {
      return event.id == req.params.id;
    });

    event.nombre = req.body.nombre;
    event.provincia = req.body.provincia;
    event.localidad = req.body.localidad;
    event.direccion = req.body.direccion;
    event.fecha = req.body.fecha;
    event.horaI = req.body.horaI;
    event.horaF = req.body.horaF;
    event.precio = Number(req.body.precio);
    event.banner = req.file ? req.file.filename : event.banner;
    event.descripcion = req.body.descripcion;
    event.masInformacion = req.body.masInformacion;

    fs.writeFileSync(productsFilePath, JSON.stringify(products));
    res.redirect("/");
  },

  delete: (req, res) => {
    const event = events.find((event) => {
      if (event.id == req.params.id) {
        event.estado = "close";
        return;
      }
    });

    fs.writeFileSync(eventsFilePath, JSON.stringify(events));
    res.redirect("/");
  },
  //controlador del EventCart
  carrito: (req, res) => {
    res.render("events/EventCart");
  },
};
