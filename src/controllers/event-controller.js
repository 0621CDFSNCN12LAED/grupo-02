const fs = require("fs");
const path = require("path");

//--------------DataBase.Json---------------------------//
const eventsFilePath = path.join(__dirname, "../data/eventDataBase.json");
const events = JSON.parse(fs.readFileSync(eventsFilePath, "utf-8"));

const products = [
  {
    id: 1,
    nombre: "Running 10K",
    provincia: "Texas",
    localidad: "Katy",
    direccion: "017 Brown Court",
    fecha: "2021-07-09",
    horaI: "05:33", //ver con pablo el 0
    horaF: "11:29",
    precio: 2729.45,
    banner: "/imagenes/evento1.jpg",
    descripcion: "Felty's syndrome, knee",
    masInformacion: "tamu.edu",
    estado: "open",
  },
  {
    id: 1,
    nombre: "Running 10K",
    provincia: "Texas",
    localidad: "Katy",
    direccion: "017 Brown Court",
    fecha: "2021-07-09",
    horaI: "05:33", //ver con pablo el 0
    horaF: "11:29",
    precio: 2729.45,
    banner: "/imagenes/evento3.jpg",
    descripcion: "Felty's syndrome, knee",
    masInformacion: "tamu.edu",
    estado: "open",
  },
  {
    id: 1,
    nombre: "Running 10K",
    provincia: "Texas",
    localidad: "Katy",
    direccion: "017 Brown Court",
    fecha: "2021-07-09",
    horaI: "05:33", //ver con pablo el 0
    horaF: "11:29",
    precio: 2729.45,
    banner: "/imagenes/evento4.jpg",
    descripcion: "Felty's syndrome, knee",
    masInformacion: "tamu.edu",
    estado: "open",
  },
  {
    id: 1,
    nombre: "Running 10K",
    provincia: "Texas",
    localidad: "Katy",
    direccion: "017 Brown Court",
    fecha: "2021-07-09",
    horaI: "05:33", //ver con pablo el 0
    horaF: "11:29",
    precio: 2729.45,
    banner: "/imagenes/evento5.jpg",
    descripcion: "Felty's syndrome, knee",
    masInformacion: "tamu.edu",
    estado: "open",
  },
  {
    id: 1,
    nombre: "Running 10K",
    provincia: "Texas",
    localidad: "Katy",
    direccion: "017 Brown Court",
    fecha: "2021-07-09",
    horaI: "05:33", //ver con pablo el 0
    horaF: "11:29",
    precio: 2729.45,
    banner: "/imagenes/evento4.jpg",
    descripcion: "Felty's syndrome, knee",
    masInformacion: "tamu.edu",
    estado: "open",
  },
  {
    id: 1,
    nombre: "Running 10K",
    provincia: "Texas",
    localidad: "Katy",
    direccion: "017 Brown Court",
    fecha: "2021-07-09",
    horaI: "05:33", //ver con pablo el 0
    horaF: "11:29",
    precio: 2729.45,
    banner: "/imagenes/evento3.jpg",
    descripcion: "Felty's syndrome, knee",
    masInformacion: "tamu.edu",
    estado: "open",
  },
  {
    id: 1,
    nombre: "Running 10K",
    provincia: "Texas",
    localidad: "Katy",
    direccion: "017 Brown Court",
    fecha: "2021-07-09",
    horaI: "05:33", //ver con pablo el 0
    horaF: "11:29",
    precio: 2729.45,
    banner: "/imagenes/evento1.jpg",
    descripcion: "Felty's syndrome, knee",
    masInformacion: "tamu.edu",
    estado: "open",
  },
  {
    id: 1,
    nombre: "Running 10K",
    provincia: "Texas",
    localidad: "Katy",
    direccion: "017 Brown Court",
    fecha: "2021-07-09",
    horaI: "05:33", //ver con pablo el 0
    horaF: "11:29",
    precio: 2729.45,
    banner: "/imagenes/evento4.jpg",
    descripcion: "Felty's syndrome, knee",
    masInformacion: "tamu.edu",
    estado: "open",
  },
];

module.exports = {
  detail: (req, res) => {
    const event = events.find((event) => {
      return event.id == req.params.id;
    });
    res.render("products/EventDetail", { event });
  },

  //////////////////////CREACION// Y EDICION DE PRODUCTOS (BACK)////////////////////////

  creacionEvento: (req, res) => {
    res.render("products/CreateEvent");
  },

  edit: (req, res) => {
    const event = events.find((event) => {
      return event.id == req.params.id;
    });
    res.render("products/EditEvent", { event });
  },

  carrito: (req, res) => {
    res.render("products/EventCart");
  },
};
