const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Room extends Model {};

Room.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true,
    }, 
    creditScore: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    rent: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    smoking: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    gender: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    room_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: "user",
            key: "id"
        }
    }
},
{
    sequelize, 
    timestamps: false, 
    freezeTableName: true, 
    underscored: true, 
    modelName: 'rooms', 
  }
);

module.exports = Room;