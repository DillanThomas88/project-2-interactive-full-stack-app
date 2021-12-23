const router = require('express').Router();
const homePage = require('./home-page');

router.use('/', homePage);

module.exports = router;
