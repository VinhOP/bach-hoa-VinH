const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const app = express();

const PORT = process.env.PORT || 5000;
app.use(bodyParser.json());

require("dotenv").config();

mongoose.connect(process.env.ATLAS_URI);

const productsSchemas = mongoose.Schema({
  name: String,
  image: String,
  countInStocks: Number,
});

const Product = mongoose.model("Product", productsSchemas);

//routes
require("./routes/testRoute")(app, Product);

app.listen(PORT);
