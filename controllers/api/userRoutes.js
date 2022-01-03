const router = require('express').Router();
const { User } = require('../../models');

const sendEmail = require("../../utils/sendEmail");

//NOT FINISHED:
//POST request to '/request-new' for requestPasswordReset

router.post('/request-new', async (req, res) => { 
  try {
    const validEmail = await User.findOne(
      {
        where: {
          email: req.body.accountEmail } });
    // console.log(validEmail)
    if (!validEmail) {
      res
      .status(400)
      .json({ message: 'Email not found, please try again' });
      return;
    }
    
    const link = `https://shoestring-app.herokuapp.com/password-reset?${validEmail.id}`;
    // const link = `localhost:3001/password-reset/${validEmail.id}`;
    await sendEmail(req.body.accountEmail, "Your password reset link", `Here is your link to reset your password: ${link}`);

    res.send("password reset link sent to your email account");
    
  } catch (err) {
    console.log('error-----------------------')
    console.log(err)
    res.status(500).json(err);
  }
});




//PUT request to '/reset' for newPassword to replace old 
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
      .json({ message: 'Failed to sign un' });
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
