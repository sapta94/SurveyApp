var express = require('express')
var app = express()
const path = require('path')
const passportConfig = require('./services/passport')
var bodyParser = require('body-parser')
const mongoose = require('mongoose')
var config = require("./config");
var port = process.env.PORT || 5000;
var authenticate = require('./routes/authenticate')

mongoose.connect(config.mongoUri)

require('./routes/authenticate')(app)

app.use(bodyParser.urlencoded({ extended:true}))
app.use(bodyParser.json())
app.use('/',authenticate);



app.listen(port)
console.log("**listening on port: "+port+"**")