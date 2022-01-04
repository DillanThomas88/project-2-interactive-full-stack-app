const router = require('express').Router();
const { User } = require('../../models');

router.get('/',  async (req,res) => {
    const data = await User.findAll()
    res.json({ users: data });
  
  })

  module.exports = router