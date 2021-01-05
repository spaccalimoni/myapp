var express = require('express');
var router = express.Router();

const { proxy } = require('rtsp-relay')(app);
const handler = proxy({url:'rtsp://192.168.1.61:7447/OluifM93AT7FMb7I',verbose: false,});

app.ws('/api/stream', handler);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express.js' });
});

module.exports = router;
