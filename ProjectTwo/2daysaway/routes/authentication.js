const { Router } = require('express');
const router = new Router();

const User = require('./../models/user');
const bcryptjs = require('bcryptjs');

router.get('/sign-up', (req, res, next) => {
    res.render('sign-up');
  });
  
  router.post('/sign-up', (req, res, next) => {
    const { username, email, password } = req.body;
    bcryptjs
      .hash(password, 10)
      .then(hash => {
        return User.create({
          username,
          email,
          passwordHash: hash
        });
      })
      .then(user => {
        req.session.user = user._id;
        res.redirect('/');
      })
      .catch(error => {
        next(error);
      });
  });


//   login

module.exports = router;