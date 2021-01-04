var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Questo è un progetto per una webcam su un browser.' });
});

module.exports = router;
