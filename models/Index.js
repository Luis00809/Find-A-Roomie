const Room = require('./Room');
const Roomate = require('./Roomate');
const User = require('./User');

User.hasOne(Roomate, {
    foreignKey: 'roomate_id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
});

Roomate.belongsTo(User, {
    foreignKey: 'roomate_id',
});


User.hasMany(Room, {
    foreignKey: 'room_id',
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
});

Room.belongsTo(User, {
    foreignKey: 'room_id',
})


module.exports = { Room, Roomate, User };

