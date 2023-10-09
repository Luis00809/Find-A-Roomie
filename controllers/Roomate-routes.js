const router = require('express').Router();
const { User, Roommate, Room } = require('../models');

router.get('/', async (req, res) => {
    try {

        const roommateData = await Roommate.findAll({
            include: [ { model: User }]
        });
        const roommates = roommateData.map((data) => data.get({ plain: true }));

        res.status(200).json(roommates);

    } catch (err) {
        res.status(404);
        console.log(err)
    }
});

router.get('/:id', async (req, res) => {
    try {

        const roommateData = await Roommate.findByPk(req.params.id, {
            where: {
                id: req.params.id
            },
            include: [ { model: User }]
        });
        const roommates = roommateData.get({ plain: true });

        res.status(200).json(roommates);

    } catch (err) {
        res.status(404);
        console.log(err)
    }
});


module.exports = router; 
