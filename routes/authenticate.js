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
  app.get("/auth/google/callback", passport.authenticate("google"));

  app.get('/api/currentUser',function(req,res){
    res.send(req.user)
  })
};
