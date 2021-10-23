const { DataTypes } = require("Sequelize");

module.exports = (sequelize) => {
  const model = sequelize.define(
    "Sale",
    {
      date_sale: DataTypes.DATE,
      quantity: DataTypes.INTEGER,
    },
    {
      tableName: "sales",
      timestamps: false,
    }
  );
  return model;
};
