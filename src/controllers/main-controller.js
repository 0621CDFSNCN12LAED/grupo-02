const fs = require("fs");
const path = require("path");

//--------------DataBase.Json---------------------------//
let eventsFilePath = path.join(__dirname, "../data/eventDataBase.json");
let events = JSON.parse(fs.readFileSync(eventsFilePath, "utf-8"));

module.exports = {
  //////////////////////VISUALIZAR LAS PAGINAS PEDIDAS////////////////////////
  index: (req, res) => {
    //filterByStatus
    const openEvents = events.filter((event) => {
      return event.estado == "open";
    });

    res.render("index", { title: "Deporteando", openEvents });
  },
};
