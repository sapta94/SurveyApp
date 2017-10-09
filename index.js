var express = require('express')
var app = express()
const path = require('path')
require('./models/user')
const passport=require('passport')
const passportConfig = require('./services/passport')
var bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cookieSession = require('cookie-session')
var config = require("./config");
var port = process.env.PORT || 5000;
var authenticate = require('./routes/authenticate')

mongoose.connect(config.mongoUri)


app.use(
   scookieSession({
        maxAge: 30*24*24*60*60*1000,
        keys: [config.cookieKey]
    })
)

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authenticate')(app)

app.use(bodyParser.urlencoded({ extended:true}))
app.use(bodyParser.json())
app.use('/',authenticate);



app.listen(port)
console.log("**listening on port: "+port+"**")