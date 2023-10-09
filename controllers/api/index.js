const router = require('express').Router();

const users = require('./user');
const rooms = require('./room');
const rommate = require('./roommate');

router.use('/user', users);
router.use('/rooms', rooms);
router.use('/rommate', rommate);

module.exports = router; 
