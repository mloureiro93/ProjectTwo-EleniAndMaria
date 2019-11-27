const {
  Router
} = require("express");
const router = new Router();

function randomIndex(array) {
  return Math.floor(Math.random() * Math.floor(array.length));
}
const Poi = require("./../models/POI");
// const cities = require("./../bin/itinerary");

const Post = require("./../models/post");

const routeGuard = require("./../middleware/route-guard");

const uploader = require("./../middleware/cloudinary-config");

router.get("/", (req, res, next) => {
  res.render("homepage", {
    title: "2Days Away"
  });
});

//user profile

router.get("/userprofile", (req, res, next) => {
  res.render("user");
});

//routes for selectionPage
router.get("/tripSelection", (req, res, next) => {
  res.render("Itinerary/tripSelection");
});

router.post("/tripSelection", (req, res, next) => {
  const city = req.body.travelingFrom;
  let filteredArray;
  Poi.find({}).then(cities => {
    filteredArray = cities.filter(item => item.city_name !== city);
    const randomCity = filteredArray[randomIndex(filteredArray)];
    if (city === "") {
      res.render("Itinerary/tripSelection", {
        errorMessage: "Insert your departure point"
      });
    } else {
      res.redirect("/tripSelection/" + randomCity._id);
    }
  });
});

router.get("/tripSelection/:id", (req, res, next) => {
  const cityId = req.params.id;
  // TODO: GET THE VALUE OF "id", SEARCH IT IN YOUR DATABASE AND SEND IT TO YOUR VIEW5
  Poi.findById(cityId)
    .then(city => {
      res.render("Itinerary/tripSelection", {
        city
      });
    });
});

// router.post("/tripSelection/:id", (req, res, next) => {
//   const cityId = req.params.id;
//   // TODO: GET THE VALUE OF "id", SEARCH IT IN YOUR DATABASE AND SEND IT TO YOUR VIEW5
//   Poi.findById(cityId)
//     .then(city => {
//       res.redirect("/day1/" + city._id);
//     });
// });

//Routes for Itinerary (Day1 & Day2)

router.get("/day1/:id", (req, res, next) => {
  const cityId = req.params.id;
  // TODO: GET THE VALUE OF "id", SEARCH IT IN YOUR DATABASE AND SEND IT TO YOUR VIEW5
  Poi.findById(cityId).then(city => {
    res.render("Itinerary/day1", {
      city
    });
  });
});

router.get("/day2/:id", (req, res, next) => {
  const cityId = req.params.id;
  Poi.findById(cityId).then(city => {
    res.render("Itinerary/day2", {
      city
    });
  });
});

module.exports = router;