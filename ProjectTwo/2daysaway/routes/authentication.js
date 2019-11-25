const { Router } = require("express");
const router = new Router();

const User = require("./../models/user");
const bcryptjs = require("bcryptjs");

router.get("/sign-up", (req, res, next) => {
  res.render("sign-up");
});

router.post("/sign-up", (req, res, next) => {
  const { username, email, password } = req.body;
  User.findOne({ username: username })
  .then(user=>{
    if (user) {
      res.render("sign-up", {
        errorMessage: "The username already exists!"
      }).catch(err=>{
        next(err);
      })
    } else {
      if (username === "" || password === "") {
        res.render("sign-up", {
          errorMessage: "Indicate a username and a password to sign up"})
        } else {
          bcryptjs.hash(password, 10)
          .then(hash => {
          return User.create({
            username,
            email,
            passwordHash: hash
          })
        })
            .then(user => {
              req.session.user = user._id;
              res.redirect("/");
            })
            .catch(error => {
              next(error);
            })

        }
      }
    }
  );
});




//   bcryptjs.hash(password, 10)
//   .then(hash => {
//     if (username === "" || password === "") {
//     .then(()=>{
//        return User.findOne({ username: username })
//        .then(user => user !== null)
//       })
 
//       res.render("sign-up", {
//         errorMessage: "The username already exists!"
//       });
//     } else {
     
//     }
//   });
// });

//   login

module.exports = router;
