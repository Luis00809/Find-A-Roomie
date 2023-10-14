const router = require('express').Router();
const { Room, User, Roommate } = require('../../models');

// create a listing
router.post('/', async (req, res) => {
    try {

        const roomData = await Room.create(req.body);
        res.status(200).json(roomData);
        
    } catch (error) {
        console.log(err);
        res.status(500).json(err)
    }
});


// create roommate form info
router.post('/', async (req, res) => {
    try {
        const roommateData = await Roommate.create(req.body);
        res.status(200).json(roommateData);

    } catch (err) {
        console.log(err);
        res.status(500).json(err)

    }
});

module.exports = router;