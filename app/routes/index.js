var express = require('express');

var zll = express.Router();
/* GET home page. */
zll.get('/second', function(req, res, next) {
	var zll=""张兰兰;
  res.render('index', { title: 'Express' });
});
module.exports = sly;
