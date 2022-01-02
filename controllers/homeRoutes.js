const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {

  try {
    if (!req.session.logged_in) {
      res.redirect('/login');
    } else {
      let logged_in = req.session.logged_in

      let data = await User.findAll(
        // where:[],
        // include:[
        //   {model: bill, as :"bill"},
        //   {model: loan, as :"loan"}
        // ]
      )

      let serializedData = data.map(data=> data.get({plain:true}))

      res.render('user', {data:serializedData, logged_in})
      res.redirect('user')
    }

  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/user');
    return;
  }

  res.render('login');
});

router.get('/signup', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/user');
    return;
  }
  res.render('signup')
})

router.get('/user', withAuth, (req, res) => {
  res.render("user")
})
router.get('/request-new-password', (req, res) => {
  res.render("requestreset")
})
module.exports = router;
