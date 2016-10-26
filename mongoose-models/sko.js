var mongoose = require('mongoose');
var db = mongoose.connection;

var skoSchema = mongoose.Schema({

  model: String,
  sizes: Array,
  color: Array,
  type: String,
  price: Number,
  campaign: Boolean,
  priceOff: Number,
  
});

var Sko = db.model('Sko', skoSchema);
module.exports = Sko;