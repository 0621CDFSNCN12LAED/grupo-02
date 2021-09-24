const fs = require("fs");
const path = require("path");

let userFilePath = path.join(__dirname, "../data/userDataBase.json");
let users = JSON.parse(fs.readFileSync(userFilePath, "utf-8"));

const userServices = {};

module.exports = userServices;
