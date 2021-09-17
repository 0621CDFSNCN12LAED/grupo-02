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
  //////////////////////VISUALIZAR LAS PAGINAS PEDIDAS////////////////////////

  index: (req, res) => {
    res.render("index", { title: "Deporteando", products: products });
  },

  carrito: (req, res) => {
    res.render("products/EventCart");
  },

  //////////////////////VALIDAR DATOS DEL USUARIO (BACK)////////////////////////

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
  delete: (req, res) => {
    const product = products.find((product) => {
      return product.id == req.params.id;
    });
    product.delete = true;

    fs.writeFileSync(productsFilePath, JSON.stringify(products));
    res.redirect("/products");
  },
};
