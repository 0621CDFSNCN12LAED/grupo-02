const path = require("path");
const products = [
  {
    id: 1,
    title: "Running Villa María Cordoba",
    location: "Córdoba",
    Place_event:"calle 44",
    longDate: "Sábado 19 de Septiembre 2021",
    shortDate: "19/09/2021",
    schedule: "9 A.M.",
    end_time:"8 P.M",
    price: "$ 300",
    img: "/imagenes/evento1.jpg",
    desc: "¡LANZAMOS NUESTRA 2° EDICIÓN! ¡Nos preparamos para volver a vivir momentos únicos rodeados de naturaleza y enoturismo! ¿¡Están listos!?",
    more_inf: "http://running-cba.com.ar",
  },
  {
    id: 2,
    title: "Cross Country",
    location: "Sierras de Cordoba",
    Place_event:"calle 44",
    longDate: "Sabado 17 de Noviembre 2021",
    shortDate: "17/11/21",
    schedule: "3 P.M.",
    end_time:"4 P.M",
    price: "$ 450 ",
    img: "/imagenes/evento5.jpg",
    desc: "¡LANZAMOS NUESTRA 2° EDICIÓN! ¡Nos preparamos para volver a vivir momentos únicos rodeados de naturaleza y enoturismo! ¿¡Están listos!?",
    more_inf: "Podes asistir con la Familia",
  },
  {
    id: 3,
    title: "Sport Pista",
    location: "Rosario",
    Place_event:"calle 44",
    LongDate: "Domingo 04 de Septiembre 2021",
    shortDate: "04/09/21",
    schedule: "1 P.M.",
    end_time:"6 P.M",
    price: "$ 1000 ",
    img: "/imagenes/evento6.jpg",
    desc: "¡LANZAMOS NUESTRA 2° EDICIÓN! ¡Nos preparamos para volver a vivir momentos únicos rodeados de naturaleza y enoturismo! ¿¡Están listos!?",
    more_inf: "Trae tu bici a rodar",
  },
  {
    id: 4,
    title: "Montain Country",
    location: "Mendoza",
    Place_event:"calle 44",
    longDate: "Lunes 20 de Noviembre",
    shortDate: "Domingo 20 de Noviembre 2021",
    schedule: "20/11/21",
    end_time:"22/11/21",
    price: "$ 500",
    img: "/imagenes/evento3.jpg",
    desc: "¡LANZAMOS NUESTRA 2° EDICIÓN! ¡Nos preparamos para volver a vivir momentos únicos rodeados de naturaleza y enoturismo! ¿¡Están listos!?",
    more_inf: "Trae tu bici a rodar",
  },
];

module.exports = {

  //////////////////////VISUALIZAR LAS PAGINAS PEDIDAS////////////////////////

  index: (req, res) => {
    res.render("index", { title: "Deporteando", products: products });
  },

  carrito: (req, res) => {
    res.render("products/productCart");
  },

  producto: (req, res) => {
    const product = products.find((product) => {
      return product.id == req.params.id;
    });
    res.render("products/productDetail", { product: product });
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

 //////////////////////CREACION Y EDICION DE PRODUCTOS (BACK)////////////////////////

  creacionProducto: (req, res) => {
    res.render("products/CreateProduct");
  },

  edit:(req, res) => {
    const product = products.find((product) => {
      return product.id == req.params.id;
    });
    res.render("products/editProduct" , { product: product})
  },

};
