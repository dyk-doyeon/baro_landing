var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/contract', function (req, res, next) {
  res.render('contract', { title: 'This is contract page' });
});

module.exports = router;
