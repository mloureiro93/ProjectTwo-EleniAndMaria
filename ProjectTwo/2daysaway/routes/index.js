const {
  Router
} = require('express');
const router = new Router();

router.get('/', (req, res, next) => {
  res.render('homepage', {
    title: '2Days Away'
  });
});

//REVIEW POSTS

router.get('/reviews', (req, res, next) => {
  res.render('Post/listPosts')
});

router.get('/singlePost', (req, res, next) => {
  res.render('Post/singlePost')
});

router.get('/userprofile', (req, res, next) => {
  res.render('user')
});



module.exports = router;