const { DataTypes } = require("Sequelize");

module.exports = (sequelize) => {
  const model = sequelize.define(
    "Categorie",
    {
      categorie: DataTypes.STRING,
    },
    {
      tableName: "categories",
      timestamps: false,
    }
  );
  return model;
};
