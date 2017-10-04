var express = require("express");
var router = express.Router();
var passport = require("passport");

module.exports = function(app) {
  //route handler to take user to google server
  router.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );

  //route handler to handle callback after verification
  router.get("/auth/google/callback", passport.authenticate("google"));
};
