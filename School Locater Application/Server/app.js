var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const db = require('mongoose');
var cors = require('cors');

/*//Rest API's
require('./controllers/UMS/index')(app);
require('./controllers/external/index')(app);*/

let registartion = require('./model/registration');
let Data = require('./model/gamedata');



let db_check = db.connect('mongodb://hackaroo:hackaroo123@ds151293.mlab.com:51293/hackaroo',{ useNewUrlParser: true });
db_check.then((result)=>{
    console.log("DB connection is established !");
}).catch((error)=>{
    console.log("DB connection failed !.");
})
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'dist')));
app.use(cors());


require('./routes/registration')(app, db);
require('./routes/Data')(app, db);


// error handler
app.use(function(err, req, res, next) {
    // Website you wish to allow to connect
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
