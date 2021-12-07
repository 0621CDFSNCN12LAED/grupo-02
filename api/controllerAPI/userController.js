const { User } = require("../../src/database/models");

module.exports = {
  list: async (req, res) => {
    const users = await User.findAll({
      order: [["id", "ASC"]],
      offset: 0,
      limit: 10,
    });
    res.json({
      meta: {
        status: 200,
        total: users.length,
        url: "http://localhost:3000/api/users/",
      },
      data: users,
    });
    // res.send("API DETAIL")
  },
  detail: async (req, res) => {
    const user = await User.findByPk(req.params.id);
    if (user) {
      res.json({
        meta: {
          status: 200,
          url: "http://localhost:3000/api/users/" + req.params.id,
        },
        data: user,
      });
    } else {
      res.json({
        meta: {
          status: 404,
          url: "htpp://localhost:3000/api/users/" + req.params.id,
        },
        data: `No se encontró el usuario con id: ${req.params.id}`,
      });
    }
    // res.send("API DETAIL");
  },
  create: async (req, res) => {
    const newUser = await User.create(req.body);
    res.send({
      meta: {
        status: 201,
        url: "api/users",
      },
      data: newUser,
    });
    // res.send("Se está creando un usuario");
  },
  destroy: async (req, res) => {
    const deleteUser = await User.destroy({
      where: { id: req.params.id },
    });
    res.send("Se está eliminando un usuario");
  },
};
