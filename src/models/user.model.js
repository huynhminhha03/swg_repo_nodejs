const { Model, DataTypes } = require("sequelize");
const sequelize = require("../configs/database");

class User extends Model {
}

User.init(
  {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  },
  { sequelize, modelName: "User", tableName: "users", timestamps: false }
);

module.exports = User;
