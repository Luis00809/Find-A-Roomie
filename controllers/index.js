const router = require('express').Router();

const homeRoutes = require('./homepage-routes');
const userRoutes = require('./User-routes');
const roomRoutes = require('./Room-routes');
const rommateRoutes = require('./Roomate-routes');
const dashboardRoutes = require('./dashboard-routes');
const apiRoutes = require('./api');

router.use('/dashboard', dashboardRoutes);
router.use('/', homeRoutes);
router.use('/user', userRoutes);
router.use('/listing', roomRoutes);
router.use('/roommates', rommateRoutes);
router.use('/api', apiRoutes);

module.exports = router; 
