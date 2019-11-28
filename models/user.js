const mongoose = require("mongoose");

const generateId = length => {
  const characters =
    '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let token = '';
  for (let i = 0; i < length; i++) {
    token += characters[Math.floor(Math.random() * characters.length)];
  }
  return token;
};

const schema = new mongoose.Schema({
  username: {
    type: String,
    trim: true,
    required: true

  },
  email: {
    type: String,
    lowercase: true,
    trim: true
  },
  passwordHash: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ["Pending Confirmation", "Active"],
    default: "Pending Confirmation"
  },
  confirmationCode: {
    type: String,
    default: generateId(30)
  },
  destination: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Poi'
  }
});

module.exports = mongoose.model("User", schema);