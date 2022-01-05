const router = require('express').Router();
const { User } = require('../../models');


router.put("/reset/:id", async (req, res) => {
    try {
      
      const newPass = await User.update(
        {
        password: req.body.newPassword
        },
        {
          where: {
            id: req.body.id
          },
          individualHooks: true
        }
      )
      if (!newPass) {
        res
        .status(400)
        .json({ message: 'Enter a password, please try again' });
        return;
      }
  
      res.json(newPass)
  
    }catch (err) {
      console.log(err)
      res.status(500).json(err);
    }
  })

  module.exports = router