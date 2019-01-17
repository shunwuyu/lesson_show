const TABLE_NAME = 'user';

module.exports = (sequelize, DataTypes) => sequelize.define(
  TABLE_NAME,
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    passwd: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: TABLE_NAME,
  },
);