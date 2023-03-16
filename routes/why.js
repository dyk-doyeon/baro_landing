var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/why', function (req, res, next) {
  res.render('why', { title: 'This is why page' });
});

module.exports = router;
