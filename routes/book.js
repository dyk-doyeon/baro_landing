var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/book', function (req, res, next) {
  res.render('book', { title: 'This is book page' });
});

module.exports = router;
