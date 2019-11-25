const { Router } = require("express");
const router = new Router();

router.get("/", (req, res, next) => {
  res.render("homepage", {
    title: "2Days Away"
  });
});

//REVIEW POSTS

router.get("/reviews", (req, res, next) => {
  res.render("Post/listPosts");
});

router.get("/createPost", (req, res, next) => {
  res.render("Post/createPost");
});

router.post("/createPost", (req, res, next) => {
  console.log("----here-----");
  const name = req.body.text;
  console.log("HERE -> REQ.BODY-------", name);
  res.redirect("/userprofile");
});

router.get("/userprofile", (req, res, next) => {
  res.render("user");
});

module.exports = router;
