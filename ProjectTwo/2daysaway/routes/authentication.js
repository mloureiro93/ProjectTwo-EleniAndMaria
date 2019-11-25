const { Router } = require("express");
const router = new Router();

const User = require("./../models/user");
const bcryptjs = require("bcryptjs");
const sendConfEmail = require("../services/email");

//SIGN-UP

router.get("/sign-up", (req, res, next) => {
  res.render("Authentication/sign-up");
});

router.post("/sign-up", (req, res, next) => {
  const { username, email, password } = req.body;
  User.findOne({ username: username }).then(user => {
    if (user) {
      res
        .render("Authentication/sign-up", {
          errorMessage: "The username already exists!"
        })
        .catch(err => {
          next(err);
        });
    } else {
      if (username === "" || password === "") {
        res.render("Authentication/sign-up", {
          errorMessage: "Indicate a username and a password to sign up"
        });
      } else {
        bcryptjs
          .hash(password, 10)
          .then(hash => {
            return User.create({
              username,
              email,
              passwordHash: hash
            });
          })
          .then(user => {
            req.session.user = user._id;
            sendConfEmail(user.email, user.confirmationCode);
            res.redirect("/");
          })
          .catch(error => {
            next(error);
          });
      }
    }
  });
});

//LOGIN

router.get("/login", (req, res, next) => {
  res.render("login");
});

router.post("/login", (req, res, next) => {
  let userId;
  const { username, password } = req.body;
  User.findOne({ username })
    .then(user => {
      if (!user) {
        return Promise.reject(new Error("That user cannot be found."));
      } else {
        userId = user._id;
        return bcryptjs.compare(password, user.passwordHash);
      }
    })
    .then(result => {
      if (result) {
        req.session.user = userId;
        res.redirect("/");
      } else {
        return Promise.reject(new Error("Wrong password."));
      }
    })
    .catch(error => {
      next(error);
    });
});

//SIGN-OUTT

router.post("/sign-out", (req, res, next) => {
  req.session.destroy();
  res.redirect("/");
});

//EMAIL

router.get("/confirm/:token", (req, res, next) => {
  console.log("TOKEN", req.params.token);
  console.log("USER ID", req.session.user);
  User.findOneAndUpdate(
    { confirmationCode: req.params.token },
    { status: "Active" }
  ).then(() => {
    res.redirect("/");
  });
});

module.exports = router;
