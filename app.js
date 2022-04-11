var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
// add session
var session = require('express-session');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// add app use session start
app.use(session({
    secret: 'WebDev',
    resave: false,
    saveUninitialized: true
}));
// ends
app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
