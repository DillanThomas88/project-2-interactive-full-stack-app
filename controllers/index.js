const router = require('express').Router();
const homePage = require('./home-page');
const userRoutes = require('./userRoutes')

router.use('/', homePage);
router.use('/users', userRoutes)

module.exports = router;
