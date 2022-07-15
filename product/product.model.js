const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const mulitipleFileSchema = new Schema(
  {
    name: String,
    category: String,
    type: String,
    title: String,
    price: Number,
    count:{
      type:Number,
      default:1
    },
    quantity : {
      type:Number,
      default:1
    },
    files: [Object],
    id:String
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", mulitipleFileSchema);
