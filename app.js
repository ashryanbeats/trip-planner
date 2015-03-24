// app for trip planner

var express = require('express');
var swig = require('swig');
var logger = require('morgan')('dev');
var bodyParser = require('body-parser');
var path = require('path');

// routes
var routes = require('./routes/index');

var app = express();

app.listen(3000, function (err) { console.log('currently listening...'); });

// view engine setup
app.engine('html', swig.renderFile);
app.set('views', path.join(__dirname, 'public/views'));
app.set('view engine', 'html');

// setup middleware

app.use(logger);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', routes);



