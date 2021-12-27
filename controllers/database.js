const router = require('express').Router();
const { User } = require('../models');

router.get('/', async (req, res) => {
    try {
      let logged_in = req.session.logged_in
  
      let data = await User.findAll()
  
      let serializedData = data.map(blog=> blog.get({plain:true}))
  
     res.render("database", {data:serializedData, logged_in})
    } catch (err) {
      res.status(500).json(err);
    }
  });
module.exports = router;