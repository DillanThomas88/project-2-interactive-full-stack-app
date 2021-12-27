const router = require('express').Router();
const { User } = require('../../models');

//TO ADD:
//POST request to '/request-new' for requestPasswordReset
//PUT request to '/reset' for newPassword to replace old 

router.get('/',  async (req,res) => {
  const data = await User.findAll()
  res.json({ users: data });
})
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });
    // console.log(userData)
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
    req.session.logged_in = true
    res.json({ user: userData, message: 'You are now logged in!' });


    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
    });
    
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});

router.post('/signup', async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    if (!newUser) {
      res
      .status(400)
      .json({ message: 'Incorrect email or password, please try again' });
      return;
    }
    
    res.json({ user: newUser, message: 'You are now logged in!' });

    req.session.logged_in = true
    req.session.save(() => {
      req.session.user_id = newUser.id;
      req.session.logged_in = true;
      
    });
    
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});


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
