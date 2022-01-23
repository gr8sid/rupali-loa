let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/podcasts', function(req, res, next) {
  res.render('index', { title: 'Podcasts' });
});
router.get('/courses', function(req, res, next) {
  res.render('index', { title: 'Courses' });
});
router.get('/books', function(req, res, next) {
  res.render('index', { title: 'Books' });
});
router.get('/challenges', function(req, res, next) {
  res.render('index', { title: 'Challenges' });
});
router.get('/shop', function(req, res, next) {
  res.render('index', { title: 'Shop' });
});
router.get('/faqs', function(req, res, next) {
  res.render('index', { title: 'FAQs' });
});
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' }); // rotues /contact to contact.ejs and sends title = Contact as a parameter
});
module.exports = router;
