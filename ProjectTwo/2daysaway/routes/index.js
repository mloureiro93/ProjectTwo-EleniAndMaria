const {
  Router
} = require("express");
const router = new Router();

const Poi = require("./../models/POI");

const Post = require('./../models/post');

const routeGuard = require('./../middleware/route-guard');

const uploader= require('./../middleware/cloudinary-config');

router.get("/", (req, res, next) => {
  res.render("homepage", {
    title: "2Days Away"
  });
});


//user profile

router.get("/userprofile", (req, res, next) => {
  res.render("user");
});


//Routes for Itinerary (Day1 & Day2)
router.get("/day1", (req, res, next) => {
  Poi.find().then(result => {
    res.render("Itinerary/day1", result[0]);
  });
});

router.get("/day2", (req, res, next) => {
  Poi.find().then(result => {
    res.render("Itinerary/day2", result[0]);
  });
});

module.exports = router;