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