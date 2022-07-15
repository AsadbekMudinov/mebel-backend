const mongoose = require("mongoose");
const orderSchema = mongoose.Schema({
  name:String,
  tel:String,
  adress:String,
  order:[Object]

});

module.exports = mongoose.model("Order", orderSchema);
