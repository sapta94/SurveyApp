var express = require("express");
var router = express.Router();

var passport = require("passport");
var GoogleAuth = require("passport-google-oauth20").Strategy;
var config = require("../config");

//define gogole strategy with passport
passport.use(
  new GoogleAuth(
    {
      clientID: config.clientID,
      clientSecret: config.clientSecret,
      callbackURL: "/auth/google/callback"
    },
    function(accessToken,refreshToken,profile,done) { //callback after getting authenticated by google
      console.log(accessToken);
      console.log(profile)
    }
  )
);

//route handler to take user to google server
router.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"]
  })
);

//route handler to handle callback after verification
router.get('/auth/google/callback',passport.authenticate('google'))



module.exports=router;
