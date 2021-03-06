var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var mongoose = require('mongoose');
const bodyParser = require('body-parser'); 
var fs = require('fs');
var path = require('path');
require('dotenv/config');
var productRouter = require('./routes/products');
var giftCardRouter = require('./routes/giftCards');
var recommendationRouter = require('./routes/recommendations');
var newRecRouter = require('./routes/newRecommendations');
var adminRouter = require('./routes/admins');
var userRouter = require('./routes/users');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));

var mongoDb ="mongodb+srv://pliah:pliah1234@cluster0.m6xts.mongodb.net/WhatGrowingOnSite?retryWrites=true&w=majority"
mongoose.connect(mongoDb, {useNewUrlParser: true, useUnifiedTopology: true},
  error=>{
    if(error)
    console.log('MongoDB connection error:',error);
    else
    console.log('mongodb connected');
  });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// app.use(bodyParser.json({limit: '200mb'}));
// app.use(bodyParser.urlencoded({limit: '200mb', extended: true}));
// Set EJS as templating engine
app.set("view engine", "ejs");


app.use('/Products', productRouter);
app.use ('/GiftCards',giftCardRouter);
app.use('/recommendation',recommendationRouter);
app.use('/newRecommendations',newRecRouter);
app.use('/admin',adminRouter);
app.use('/user',userRouter)
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
app.use(function(req, res, next) {
  next(createError(401));
});
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send('error')
 
});
app.listen(3000);

var multer = require('multer');
 
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});

var upload = multer({ storage: storage });
module.exports = app;
