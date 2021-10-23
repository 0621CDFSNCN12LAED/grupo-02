const { DataTypes } = require("Sequelize");

module.exports = (sequelize) => {
  const model = sequelize.define(
    "User_categorie",
    {},
    {
      tableName: "user_categories",
      timestamps: false,
    }
  );
  return model;
};
