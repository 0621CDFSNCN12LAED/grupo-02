const fs = require("fs");
const path = require("path");

let eventsFilePath = path.join(__dirname, "../data/eventDataBase.json");
let events = JSON.parse(fs.readFileSync(eventsFilePath, "utf-8"));

module.exports = events;
