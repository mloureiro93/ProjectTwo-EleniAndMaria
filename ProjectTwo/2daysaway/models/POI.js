const mongoose = require('mongoose');

const poiSchema = new mongoose.Schema({
  _id: "",
  city_name: "",
  city_description: "",
  country: "",
  currency: "",
  language: "",
  steps: [{
      day: 1,
      name: "",
      description: "",
      photo: "",
      website: ""
    }, {
      day: 1,
      name: "",
      description: "",
      photo: "",
      website: ""

    }, {
      day: 1,
      name: "",
      description: "",
      photo: "",
      website: ""

    }, {
      day: 1,
      name: "",
      description: "",
      photo: "",
      website: ""

    }, {
      day: 1,
      name: "",
      description: "",
      photo: "",
      website: ""

    }, {
      day: 1,
      name: "",
      description: "",
      photo: "",
      website: ""
    },
    {
      day: 2,
      name: "",
      description: "",
      photo: "",
      website: ""
    }, {
      day: 2,
      name: "",
      description: "",
      photo: "",
      website: ""

    }, {
      day: 2,
      name: "",
      description: "",
      photo: "",
      website: ""

    }, {
      day: 2,
      name: "",
      description: "",
      photo: "",
      website: ""

    }, {
      day: 2,
      name: "",
      description: "",
      photo: "",
      website: ""

    }, {
      day: 2,
      name: "",
      description: "",
      photo: "",
      website: ""
    }
  ]
})

const Poi = mongoose.model('Poi', poiSchema);

module.exports = Poi;