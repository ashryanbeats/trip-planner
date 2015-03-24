var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/', function (req, res, next) {
  
  if (err) return next(err);

  // render a view with a map and some UI interface
  // 
  res.sendFile(path.join(__dirname, '../views/index.html');
});

// basic error handling
router.use( function (err, req, res, next) {
  res.status(500).send();
  // res render in future with more detailed error handling
});

module.exports = router;