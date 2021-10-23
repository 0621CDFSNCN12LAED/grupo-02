const { DataTypes } = require("Sequelize");

module.exports = (sequelize) => {
  const model = sequelize.define(
    "User",
    {
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      birth_date: DataTypes.DATEONLY,
      email: DataTypes.STRING,
      avatar: DataTypes.STRING,
      user_password: DataTypes.STRING,
    },
    {
      tableName: "users",
      timestamps: false,
    }
  );
  return model;
};
