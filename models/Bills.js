const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Bills extends Model {
//   checkPassword(loginPw) {
//     return bcrypt.compareSync(loginPw, this.password);
//   }
}

Bills.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cost: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    due_date: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    auto_pay: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    debited: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: { model: "user", key: "id", }
    }
  },
  {

    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'bills',
  }
);

module.exports = Bills;
