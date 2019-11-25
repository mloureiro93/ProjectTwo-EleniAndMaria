const {
  Router
} = require('express');
const router = new Router();

router.get('/', (req, res, next) => {
  res.render('homepage', {
    title: 'Hello World!'
  });
});

module.exports = router;