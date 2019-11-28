const mongoose = require('mongoose');

const poiSchema = new mongoose.Schema({
  // _id: String,
  city_name: String,
  city_description: String,
  country: String,
  currency: String,
  language: String,
  steps: [{
      day: Number,
      name: String,
      description: String,
      photo: String,
      website: String
    }, {
      day: Number,
      name: String,
      description: String,
      photo: String,
      website: String

    }, {
      day: Number,
      name: String,
      description: String,
      photo: String,
      website: String

    }, {
      day: Number,
      name: String,
      description: String,
      photo: String,
      website: String

    }, {
      day: Number,
      name: String,
      description: String,
      photo: String,
      website: String

    }, {
      day: Number,
      name: String,
      description: String,
      photo: String,
      website: String
    },
    {
      day: Number,
      name: String,
      description: String,
      photo: String,
      website: String
    }, {
      day: Number,
      name: String,
      description: String,
      photo: String,
      website: String

    }, {
      day: Number,
      name: String,
      description: String,
      photo: String,
      website: String

    }, {
      day: Number,
      name: String,
      description: String,
      photo: String,
      website: String

    }, {
      day: Number,
      name: String,
      description: String,
      photo: String,
      website: String

    }, {
      day: Number,
      name: String,
      description: String,
      photo: String,
      website: String
    }
  ]
});

const Poi = mongoose.model('Poi', poiSchema);

module.exports = Poi;