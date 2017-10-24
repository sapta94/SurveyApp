var express = require("express");
var router = express.Router();
var passport = require("passport");

module.exports = function(app) {
  //route handler to take user to google server
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );

  //route handler to handle callback after verification
  app.get("/auth/google/callback", passport.authenticate("google"),function(req,res){
    res.redirect('/surveys');
  });

  app.get('/auth/logout',function(req,res){
    console.log('logout')
    req.logout();
    res.redirect('/');
  })

  app.get('/api/currentUser',function(req,res){
    //console.log(req.user)
    res.send(req.user)
  })
};
