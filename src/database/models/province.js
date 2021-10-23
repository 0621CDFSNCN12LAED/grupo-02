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
  return model;
};
