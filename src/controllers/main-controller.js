const fs = require("fs");
const path = require("path");

//--------------DataBase.Json---------------------------//
const eventsFilePath = path.join(__dirname, "../data/eventDataBase.json");
const events = JSON.parse(fs.readFileSync(eventsFilePath, "utf-8"));

module.exports = {
  //////////////////////VISUALIZAR LAS PAGINAS PEDIDAS////////////////////////
  index: (req, res) => {
    res.render("index", { title: "Deporteando", events });
  },
};
