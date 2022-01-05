const router = require('express').Router();
const { User, Bills, Accounts, Debt } = require('../../models');

router.delete('/bills', async (req, res) => {
    try {

        // add stuff ***************

    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
});


module.exports = router