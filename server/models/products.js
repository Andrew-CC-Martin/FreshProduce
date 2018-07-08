var mongoose = require('mongoose');

var Todo = mongoose.model('Product', {
  name: {
    type: String,
    required: true,
    minlength: 5,
    trim: true
  },
  category: {
    type: String,
    required: true,
    minlength: 5,
    trim: true
  },
  onhand: {
    type: Boolean,
    default: false
  },
  price: {
    type: Number,
    default: null,
    get: getPrice,
    set: setPrice
  },
  gst: {
    type: Number,
    default: null,
    get: getPrice,
    set: setPrice
  },
});

function getPrice(num){
    return (num/100).toFixed(2);
}

function setPrice(num){
    return num*100;
}

module.exports = {Todo};