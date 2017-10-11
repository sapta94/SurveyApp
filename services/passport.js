var passport = require("passport");
var GoogleAuth = require("passport-google-oauth20").Strategy;
var config = require("../config");
var mongoose=require('mongoose')

const User = mongoose.model('users')

passport.serializeUser(function(user,done){
  done(null,user.id)
})

passport.deserializeUser(function(id,done){
  User.findById(id).then(function(user){
    done(null,user)
  })
})

//define gogole strategy with passport
passport.use(
    new GoogleAuth(
      {
        clientID: config.clientID,
        clientSecret: config.clientSecret,
        callbackURL: "/auth/google/callback",
        proxy:true
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