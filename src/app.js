const express = require("express");
const path = require("path");

const app = express();

const publicPath = path.resolve(__dirname, "../public");
app.use(express.static(publicPath));

const mainRouter = require("./routes/main-routes");
const eventRouter = require("./routes/event-routes");
const userRouter = require("./routes/user-routes");

//Registro de datos de forma segura method POST
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Dependencia de node para el uso de los method Put&Delete
const methodOverride = require("method-override");
app.use(methodOverride("_method"));
app.use("/", mainRouter);
app.use("/Evento", eventRouter);
app.use("/Usuario", userRouter);

// view engine setup (Para renderizar ejs)
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//aviso de servidor funcionando
app.listen(3000, () => {
  console.log("servidor corriendo en el puerto 3000");
});

//pagina de error 404
app.use((req, res, next) => {
  res.status(404).render("error");
});

//funcion disponible para todas las vistas (decimales)
app.locals.toThousand = (n) =>
  n
    .toString()
    .replace(".", ",")
    .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
