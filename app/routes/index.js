var express = require('express');

var zll = express.Router();
/* GET home page. */
zll.get('/second', function(req, res, next) {
	var zll="张兰兰离开了南京来看你的了";
  res.render('index', { title: 'Express' });
});
module.exports = sly;
