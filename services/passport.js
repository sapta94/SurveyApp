var passport = require("passport");
var GoogleAuth = require("passport-google-oauth20").Strategy;
var config = require("../config");
var mongoose=require('mongoose')

const User = mongoose.model('users')

//define gogole strategy with passport
passport.use(
    new GoogleAuth(
      {
        clientID: config.clientID,
        clientSecret: config.clientSecret,
        callbackURL: "/auth/google/callback"
      },
      function(accessToken,refreshToken,profile,done) { //callback after getting authenticated by google
        User.findOne({googleID:profile.id}).then(function(existingUser){
          if(existingUser){
            done(null,existingUser)
          }
          else{
            new User({googleID:profile.id}).save().then(user => done(null,user));
          }
        }) 
      }
    )
  );