const express = require("express");
const path = require("path");

const app = express();

const publicPath = path.resolve(__dirname, "../public");
app.use(express.static(publicPath));

const mainRouter = require("./routes/main-routes");
app.use(mainRouter);

// view engine setup (Para renderizar ejs)
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.listen(3000, () => {
  console.log("servidor corriendo en el puerto 3000");
});
