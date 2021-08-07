const express = require("express");
const path = require("path");

const app = express();

const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));

app.listen(3000, () => {
    console.log("servidor corriendo en el puerto 3000");
})

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/index.html"));
})

app.get("/Carrito", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/productCart.html"));
})

app.get("/Producto", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/productDetail.html"));
})

app.get("/Login", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/login.html"));
})

app.get("/Registro", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/register.html"));
})