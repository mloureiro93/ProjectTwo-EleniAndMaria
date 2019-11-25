const {
  Router
} = require('express');
const router = new Router();

router.get('/', (req, res, next) => {
  res.render('homepage', {
    title: '2Days Away'
  });
});

module.exports = router;