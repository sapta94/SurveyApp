var express = require('express')
var app = express()

var passport=require('passport')
var GoogleAuth = require('passport-google-oauth20').Strategy
var config = require('../config')


passport.use(new GoogleAuth({
    clientID:config.clientID,
    clientSecret:config.clientSecret,
    callbackURL:'/auth/google/callback'
},function(accessToken){
    console.log(accessToken)
}))