const fs = require("fs");
const path = require("path");

let userFilePath = path.join(__dirname, "../data/userDataBase.json");
let users = JSON.parse(fs.readFileSync(userFilePath, "utf-8"));

const userServices = {
    save() {
        fs.writeFileSync(userFilePath, JSON.stringify(users));
    },
    createUser(payload) {
        const lastUser = users[users.length - 1];
        const biggesUserId = users.length > 0 ? lastUser.id : 1;
        const user = {
            id: biggesUserId + 1,
            username: payload.username,
            email: payload.email,
            password: payload.password,
            Repeat_password: payload.Repeat - password,
        };
        users.push(user);
        this.save();
    },
};

module.exports = userServices;