const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Roommate extends Model {};

// change budget to string or int
// change preffered genderr to allownull
Roommate.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
       }, 
      bio: {
         type: DataTypes.TEXT,
         allowNull: true, 
        },
      budget: {
         type: DataTypes.TEXT,
         allowNull: false, 
        },
      prefferedGender: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      smoke: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      roomate_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'user',
          key: "id"
        }
      }
    },
    {
      sequelize, 
      timestamps: false, 
      freezeTableName: true, 
      underscored: true, 
      modelName: 'roommate', 
    }
);

module.exports = Roommate;