const mongoose = require("mongoose");
const Product = mongoose.model("Product");

module.exports = (app, Product) => {
  app.get("/", (req, res) => {
    console.log("hello world");
  });

  app.post("/api/products", (req, res) => {
    const product = new Product({
      ...req.body,
    });

    console.log(product);
  });
};
