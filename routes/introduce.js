var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/introduce', function (req, res, next) {
  res.render('introduce', { title: 'This is introduce page' });
});

module.exports = router;
