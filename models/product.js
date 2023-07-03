const mongoose = require("mongoose");

const productSchemas = mongoose.Schema({
  name: String,
  image: String,
  countInStocks: Number,
});

exports.Product = mongoose.model("Product", productSchemas);
