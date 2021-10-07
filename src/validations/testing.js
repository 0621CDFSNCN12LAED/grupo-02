const fs = require("fs");
const path = require("path");
let userFilePath = path.join(__dirname, "../data/userDataBase.json");
let users = JSON.parse(fs.readFileSync(userFilePath, "utf-8"));
const bcryptjs = require("bcryptjs");

const user = users.filter((user) => {
      return user.email == "guido-ruiz@hotmail.com"
    }),

const isOkThePassword = bcryptjs.compareSync(
    "$2a$10$ZULrvy99CPzvaZcodTsbauIva2u06nxT3OMXZadluHHvIak9nTzca",
  user.password
);

console.log(isOkThePassword);


