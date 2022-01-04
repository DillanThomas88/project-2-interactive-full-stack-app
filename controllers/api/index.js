const router = require('express').Router();
const userGet = require('./get');
const userPost = require('./post');
const userPut = require('./put');


router.use('/get', userGet)
router.use('/post', userPost)
router.use('/put', userPut)


module.exports = router;
