const { Event } = require("../../database/models");

module.exports = {
  list: async (req, res) => {
    const events = await Event.findAll({
      order: [["id", "ASC"]],
      offset: 0,
      limit: 10,
    });
    res.json({
      meta: {
        status: 200,
        total: events.length,
        url: "http://localhost:3000/api/events/",
      },
      data: events,
    });
  },
  detail: async (req, res) => {
    const event = await Event.findByPk(req.params.id);
    if (event) {
      res.json({
        meta: {
          status: 200,
          url: "http://localhost:3000/api/events/" + req.params.id,
        },
        data: event,
      });
    } else {
      res.json({
        meta: {
          status: 404,
          url: "http://localhost:3000/api/events/" + req.params.id,
        },
        data: `No se encontró el evento con id: ${req.params.id}`,
      });
    }
  },
  create: async (req, res) => {
    const newEvent = await Event.create(req.body);

    res.send({
      meta: {
        status: 201,
        url: "api/events",
      },
      data: newEvent,
    });
  },
  destroy: async (req, res) => {
    const deleteEvent = await Event.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.send("API destroy");
  },
};
