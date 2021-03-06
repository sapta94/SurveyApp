var express = require('express')
var app = express()
const path = require('path')
require('./models/user')
require('./models/surveys')
const passport=require('passport')
require('./services/passport')
var bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cookieSession = require('cookie-session')
var config = require("./config");
var port = process.env.PORT || 5000;
var authenticate = require('./routes/authenticate')

app.use(bodyParser.urlencoded({ extended:true}))
app.use(bodyParser.json()) 

mongoose.connect(config.mongoUri)


app.use(
   cookieSession({
        maxAge: 30*24*24*60*60*1000,
        keys: [config.cookieKey]
    })
)

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authenticate')(app)
require('./routes/billing')(app)
require('./routes/surveyRoutes')(app)

if(process.env.NODE_ENV==='production'){
    app.use(express.static('client/build'))
    const path = require('path')
    res.sendFile(path.resolve(__dirname,'client','build','index.html'))
}


//app.use('/',authenticate);



app.listen(port)
console.log("**listening on port: "+port+"**")