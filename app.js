var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var mathRouter = require('./routes/math');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/math', mathRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// Add a server to keep the application running
var server = app.listen(3000, function() {
  console.log('Server started on port 3000');
});

// Add a never-ending loop to keep the script running
setInterval(function() {
  // Add your code here to perform necessary operations
}, 1000); // Adjust the interval as needed

// Or, if your application relies on events, add event listeners instead
process.on('SIGINT', function() {
  // Handle the SIGINT event
});

process.on('uncaughtException', function(err) {
  // Handle uncaught exceptions
});


module.exports = app;
