const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connections');

class Room extends Model {};

Room.init({
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
    modelName: 'room', 
  }
);

module.exports = Room;