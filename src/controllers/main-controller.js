const path = require("path");
const products = [
  {
    id: 1,
    title: "Running Villa María Cordoba",
    location: "Córdoba",
    longDate: "Sábado 19 de Septiembre 2021",
    shortDate: "19/09/2021",
    schedule: "9 A.M.",
    price: "$ 300",
    img: "/imagenes/evento1.jpg",
    desc: "¡LANZAMOS NUESTRA 2° EDICIÓN! ¡Nos preparamos para volver a vivir momentos únicos rodeados de naturaleza y enoturismo! ¿¡Están listos!?",
    more_inf: "http://running-cba.com.ar",
  },
  {
    id: 2,
    title: "Cross Country",
    location: "Sierras de Cordoba",
    longDate: "Sabado 17 de Noviembre 2021",
    shortDate: "17/11/21",
    schedule: "3 P.M.",
    price: "$ 450 ",
    img: "/imagenes/evento5.jpg",
    desc: "¡LANZAMOS NUESTRA 2° EDICIÓN! ¡Nos preparamos para volver a vivir momentos únicos rodeados de naturaleza y enoturismo! ¿¡Están listos!?",
    more_inf: "Podes asistir con la Familia",
  },
  {
    id: 3,
    title: "Sport Pista",
    location: "Rosario",
    LongDate: "Domingo 04 de Septiembre 2021",
    shortDate: "04/09/21",
    schedule: "1 P.M.",
    price: "$ 1000 ",
    img: "/imagenes/evento6.jpg",
    desc: "¡LANZAMOS NUESTRA 2° EDICIÓN! ¡Nos preparamos para volver a vivir momentos únicos rodeados de naturaleza y enoturismo! ¿¡Están listos!?",
    more_inf: "Trae tu bici a rodar",
  },
  {
    id: 4,
    title: "Montain Country",
    location: "Mendoza",
    longDate: "Lunes 20 de Noviembre",
    shortDate: "Domingo 20 de Noviembre 2021",
    schedule: "20/11/21",
    price: "$ 500",
    img: "/imagenes/evento3.jpg",
    desc: "¡LANZAMOS NUESTRA 2° EDICIÓN! ¡Nos preparamos para volver a vivir momentos únicos rodeados de naturaleza y enoturismo! ¿¡Están listos!?",
    more_inf: "Trae tu bici a rodar",
  },
];

module.exports = {
  index: (req, res) => {
    res.render("index", { title: "Deporteando", products: products });
  },
  carrito: (req, res) => {
    res.render("productCart");
  },
  producto: (req, res) => {
    const product = products.find((product) => {
      return product.id == req.params.id;
    });
    res.render("productDetail", { product: product });
  },
  login: (req, res) => {
    res.render("login");
  },
  register: (req, res) => {
    res.render("register");
  },
};
