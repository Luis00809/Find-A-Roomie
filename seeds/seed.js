const sequelize = require('../config/connection');
const { Room, Roommate, User } = require('../models');

const roomData = require('./Room-seeds');
const roomateData = require('./Roommate-seed.json');
const userData = require('./User-seeds.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    await Room.bulkCreate(roomData, {
        individualHooks: true,
        returning: true,
    });

    await Roommate.bulkCreate(roomateData, {
        individualHooks: true,
        returning: true,
    });

    process.exit(0);
};

seedDatabase();