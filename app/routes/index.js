var express = require('express');
var sly = express.Router();

/* GET home page. */
sly.get('/second', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = sly;
