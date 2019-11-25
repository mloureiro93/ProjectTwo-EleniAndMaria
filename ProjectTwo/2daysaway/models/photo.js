const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true
  }
}, {
  timestamps: {
    createdAt: 'creationDate',
    updatedAt: 'updateDate'
  },
  toObject: {
    virtuals: true
  },
  toJSON: {
    virtuals: true
  }
});

const cloudinary = require('cloudinary');
photoSchema.virtual('resizedUrl').get(function () {
  const photo = this;
  const url = photo.url;
  const path = url.replace(/[\w\/.:]+upload\//i, '');
  console.log(path);
  const resizedUrl = cloudinary.url(path, {
    width: 670
  });
  return resizedUrl;
});

const Photo = mongoose.model('Photo', photoSchema);

module.exports = Photo;