const router = require('express').Router();
const { User } = require('../../models');

router.post('/login', async (req, res) => {
  console.log('working')
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });
    if (!userData) {
      res
      .status(400)
      .json({ message: 'Incorrect email or password, please try again' });
      return;
    }
    
    const validPassword = userData.checkPassword(req.body.password);
    
    if (!validPassword) {
      res
      .status(400)
      .json({ message: 'Incorrect email or password, please try again' });

      return;
    }
    
    res.json({ user: userData, message: 'You are now logged in!' });

    // --- TypeError: Cannot read properties of undefined (reading 'save') ---

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
    });
    
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});

//TO ADD:
//POST request to '/new' for newUSer 
//POST request to '/request-new' for requestPasswordReset
//PUT request to '/reset' for newPassword to replace old 

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
