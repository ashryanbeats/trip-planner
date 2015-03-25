var express = require('express');
var router = express.Router();
var path = require('path');
var models = require('../models/models');

router.get('/', function (req, res, next) {
  
  models.Hotel.find({}, function(err, hotels) {
  	models.Restaurant.find({}, function(err, restaurants) {
  	  models.ThingToDo.find({}, function(err, thingstodo) {
  	  	res.render('index', {
          all_hotels: hotels,           // render each collection (arrays)
          all_restaurants: restaurants,
          all_things_to_do: thingstodo
        });
        console.log(hotels[0]);
  	  });
  	});
  });

  // render a view with a map and some UI interface
  //res.sendFile(path.join(__dirname, '../public/views/index.html'));
});

// basic error handling
router.use( function (err, req, res, next) {
  if (err) console.log(err);
  res.status(500).send();
  // res render in future with more detailed error handling
});

module.exports = router;