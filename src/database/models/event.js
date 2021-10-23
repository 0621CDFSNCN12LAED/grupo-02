const { DataTypes } = require("Sequelize");

module.exports = (sequelize) => {
  const model = sequelize.define(
    "Event",
    {
      creared_at: DataTypes.timestamps,
      updated_at: DataTypes.timestamps,
      deleted_at: DataTypes.timestamps,
      eventOpen: DataTypes.TINYINT({}),
      event_name: DataTypes.STRING,
      event_address: DataTypes.STRING,
      event_date: DataTypes.DATEONLY,
      start_time: DataTypes.TIME,
      end_time: DataTypes.TIME,
      price: DataTypes.DECIMAL,
      event_description: DataTypes.STRING,
      more_info: DataTypes.start_time,
      banner: DataTypes.STRING,
    },
    {
      tableName: "events",
      timestamps: false /*por ahora -- ver la configuracion del underscored: true*/,
    }
  );
  return model;
};
