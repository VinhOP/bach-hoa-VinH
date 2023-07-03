const { Product } = require("../models/product");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const productsList = await Product.find();
  res.send(productsList);
});

router.post("/", (req, res) => {
  const product = new Product({
    ...req.body,
  });

  product.save();
});

module.exports = router;
