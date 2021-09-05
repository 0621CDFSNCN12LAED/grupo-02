const express = require("express");
const path = require("path");

const app = express();

const publicPath = path.resolve(__dirname, "../public");
app.use(express.static(publicPath));

const mainRouter = require("./routes/main-routes");
app.use(mainRouter);

// Dependencia de node para el uso de los method Put&Delete
const methodOverride = require("method-override");
app.use(methodOverride("_method"));

// view engine setup (Para renderizar ejs)
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.listen(3000, () => {
  console.log("servidor corriendo en el puerto 3000");
});

app.use((req, res, next) => {
  res.status(404).render("error");
});

//Registro de datos de forma segura method POST
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
