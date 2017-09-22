var express = require('express')
var app = express()
const path = require('path')
var bodyParser = require('body-parser')
var port = process.env.PORT || 5000;
var authenticate = require('./routes/authenticate')

app.use(bodyParser.urlencoded({ extended:true}))
app.use(bodyParser.json())




app.listen(port)
console.log("**listening on port: "+port+"**")