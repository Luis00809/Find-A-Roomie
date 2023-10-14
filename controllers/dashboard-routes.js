const router = require('express').Router();
const { Room, User, Roommate } = require('../models');


router.get('/userPage', async (req,res) => {
    try {
        res.render('dashboard')
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
})


module.exports = router;