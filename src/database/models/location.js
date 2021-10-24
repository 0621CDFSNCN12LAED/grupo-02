const { DataTypes } = require("Sequelize");

module.exports = (sequelize) => {
  const model = sequelize.define(
    "Location",
    {
      location: DataTypes.STRING,
    },
    {
      tableName: "locations",
      timestamps: false,
    }
  );
  model.associate = function (models) {
    model.hasMany(models.Province, {
      as: "provinces",
      foreignKey: "idProvinces",
    });
  };
  return model;
};
