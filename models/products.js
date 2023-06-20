const mongoose = require("mongoose");

const productsSchemas = mongoose.Schema({
  name: String,
  image: String,
  countInStocks: Number,
});

exports.Product = mongoose.model("Product", productsSchemas);
