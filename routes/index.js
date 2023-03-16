var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'BARO LANDING' });
});

router.get('/about', function (req, res, next) {
  res.render('about', { title: 'This is about page' });
});

router.get('/introduce', function (req, res, next) {
  res.render('introduce', { title: 'This is introduce page' });
});

router.get('/why', function (req, res, next) {
  res.render('why', { title: 'This is why page' });
});

router.get('/book', function (req, res, next) {
  res.render('book', { title: 'This is book page' });
});

router.get('/contract', function (req, res, next) {
  res.render('contract', { title: 'This is contract page' });
});




module.exports = router;
