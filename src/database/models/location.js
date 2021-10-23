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
  return model;
};
