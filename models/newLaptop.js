const mongoose = require('mongoose');

const laptopSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  model: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  extraAssesories: {
    type: [String],
    default: []
  },
  manufacDate: {
    type: Date,
    default: Date.now
  },
  _v: {
    type: Number,
    default: 1
  }
});

const Laptop = mongoose.model('Laptop', laptopSchema);
module.exports = Laptop;
