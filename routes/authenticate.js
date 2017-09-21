var express = require('express')
var app = express()

var passport=require('passport')
var GoogleAuth = require('passport-google-oauth20').Strategy

passport.use(new GoogleAuth())