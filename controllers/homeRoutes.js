const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {

  try {
    // degug: flip boolean

    if (!req.session.logged_in) {
      res.redirect('/login');
    } else {
      let logged_in = req.session.logged_in

      // let data = await data.findAll({
      //   include:[
      //     {model: User, as :"user"},
      //     {model: bill, as :"bills"},
      //     {model: loan, as :"loans"} <-- is this how we do it?
      //   ]
      // })

      // let serializedData = data.map(data=> data.get({plain:true}))

      //----> We Need to Create tables for bills and loans to progress -------  res.render('user', {data:serializedData, logged_in})
      res.render('user')
    }

  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  req.session.logged_in = false;
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/signup', (req, res) => {
  res.render('signup')
})

router.get('/user', withAuth, (req, res) => {
  res.render("user")
})
module.exports = router;
