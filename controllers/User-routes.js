const router = require('express').Router();
const { User, Roommate, Room } = require('../models');


// get all users
router.get('/all', async (req, res) => {
    try {

        const userData = await User.findAll({
            include: 
            [{ model: Room }, { model: Roommate }]
        });

        const users = userData.map((data) => data.get({ plain: true }));
        res.status(200).json(users);

    } catch (err) {
        console.log(err)
    }
});


// get a user
router.get('/user/:id', async (req, res) => {
    try{
        const userData = await User.findByPk(req.params.id, {
            where: {
                id: req.params.id
            },
            include: [{ model: Room }, { model: Roommate }]
        });
        const user = userData.get( { plain: true });
        res.status(200).json(user);

    } catch (err) {
        console.log(err);
        res.status(404);
    }
})


module.exports = router;