const { DataTypes } = require("Sequelize");

module.exports = (sequelize) => {
  const model = sequelize.define(
    "Province",
    {
      province: DataTypes.STRING,
    },
    {
      tableName: "provinces",
      timestamps: false,
    }
  );

  model.associate = function (models) {
    model.hasMany(models.Location, {
      as: "locations",
      foreignKey: "idProvince",
    });

    model.hasMany(models.Event, {
      as: "Events",
      foreignKey: "idProvince",
    });
  };

  return model;
};
