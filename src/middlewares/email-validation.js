const { body } = require("express-validator");

const userServices = require("../services/users-services");

module.exports = function emailValidation(req, res, next) {
  let userInDB = userServices.findByEmail(req.body.email);
  if (userInDB) {
    return res.render("users/register", {
      errors: {
        email: {
          msg: "Este email ya está registrado",
        },
      },
      oldData: req.body,
    });
  } else {
    next();
  }
};
