var express = require('express');
var slylan = express.Router();

/* GET home page. */
slylan.get('/second', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = slylan;
