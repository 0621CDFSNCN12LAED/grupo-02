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
    model.belongsTo(models.Location, {
      as: "locations",
      foreignKey: "idProvinces",
    });

    model.belongsTo(models.Event, {
      as: "Events",
      foreignKey: "idProvinces",
    });
  };

  return model;
};
