const router = require('express').Router();
const { User, Bills } = require('../../models');

router.get('/',  async (req,res) => {
    const data = await User.findAll()
    res.json({ users: data });
  
  })

  router.get('/bills', async (req,res) => {
    const data = await Bills.findAll()
    res.json({ bills: data });
  
  })

  module.exports = router