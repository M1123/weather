var express = require('express');
var router = express.Router();


var weather = require('weather-js');
 
// Options:
// search:     location name or zipcode
// degreeType: F or C
var pog;
weather.find({search: 'Novosibirsk, RU', degreeType: 'c'}, function(err, result) {
  if(err) console.log(err);
  // console.log(JSON.stringify(result, null, 2));
  pog =result;
  
  // console.log(pog[1]);
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.use('/1', function(req, res, next) {
  res.render('weather', { title: pog[1].location.name, d:pog[1]});
});

module.exports = router;

