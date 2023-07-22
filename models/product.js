const mongoose = require("mongoose");

const productSchemas = mongoose.Schema({
  name: String,
  countInStocks: Number,
  price: Number,
  price_discount: Number,
  image: { type: mongoose.Schema.Types.ObjectId, ref: "Image" },
  category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
});

exports.Product = mongoose.model("Product", productSchemas);
