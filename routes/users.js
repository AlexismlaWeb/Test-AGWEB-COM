var express = require("express");
var router = express.Router();

var userModel = require("../models/user");

var uid2 = require("uid2");
var bcrypt = require("bcrypt");

// SIGN-UP
router.post("/sign-up", async function (req, res, next) {
  var error = [];
  var result = false;
  var saveUser = null;
  var token = null;

  if (
    req.body.usernameFromFront == "" ||
    req.body.passwordFromFront == "" ||
    req.body.emailFromFront == ""
  ) {
    error.push("Champs vides");
  }

  const dataEmail = await userModel.findOne({
    email: req.body.emailFromFront,
  });

  if (dataEmail != null) {
    error.push("Il existe déjà un compte avec cette adresse email");
  }

  const dataUsername = await userModel.findOne({
    username: req.body.usernameFromFront,
  });

  if (dataUsername != null) {
    error.push("Il existe déjà un compte avec ce pseudo");
  }

  if (req.body.emailFromFront) {
    const regex = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;
    if (!req.body.emailFromFront.match(regex)) {
      error.push("Veuillez saisir un e-mail au format correct");
    }
  }

  if (error.length == 0) {
    var hash = bcrypt.hashSync(req.body.passwordFromFront, 10);
    var newUser = new userModel({
      username: req.body.usernameFromFront,
      email: req.body.emailFromFront,
      password: hash,
      token: uid2(32),
    });

    saveUser = await newUser.save();

    if (saveUser) {
      result = true;
      token = saveUser.token;
    }
  }

  res.json({ result, saveUser, error, token });
});

// SIGN-IN
router.post("/sign-in", async function (req, res, next) {
  var result = false;
  var user = null;
  var error = [];
  var token = null;

  if (
    req.body.emailOrUsernameFromFront == "" ||
    req.body.passwordFromFront == ""
  ) {
    error.push("Champs vides");
  }

  if (error.length == 0) {
    user = await userModel.findOne({
      email: req.body.emailOrUsernameFromFront,
    });
    username = await userModel.findOne({
      username: req.body.emailOrUsernameFromFront,
    });

    if (user || username) {
      if (user) {
        if (bcrypt.compareSync(req.body.passwordFromFront, user.password)) {
          result = true;
          token = user.token;
        }
      } else if (username) {
        if (bcrypt.compareSync(req.body.passwordFromFront, username.password)) {
          result = true;
          token = username.token;
        }
      } else {
        result = false;
        error.push("Mot de passe invalid");
      }
    } else {
      error.push(
        "Il n'y a aucun compte avec cette adresse e-mail ou ce nom d'utilisateur"
      );
    }
  }

  res.json({ result, user, error, token });
});

router.get("/userInfoByToken/:tokenFromFront", async function (req, res) {
  let result = false;
  var tokenParams = req.params.tokenFromFront;
  if (tokenParams) {
    var userInfo = await userModel.findOne({ token: tokenParams });
    if (userInfo) {
      result = true;
    }
    res.json({ userInfo, result });
  } else {
    res.json({ result });
  }
});

module.exports = router;
