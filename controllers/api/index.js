const router = require('express').Router();

const users = require('./user');
const rooms = require('./room');
const roommate = require('./roommate');

router.use('/user', users);
router.use('/rooms', rooms);
router.use('/roommate', roommate);

module.exports = router; 
