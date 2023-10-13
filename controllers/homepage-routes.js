const router = require('express').Router();
const { Room, User, Roommate } = require('../models');


router.get('/', (req, res) => {
    res.render('homepage')
})

router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/signUP', (req, res) => {
    res.render('signUp');
});



module.exports = router; 
