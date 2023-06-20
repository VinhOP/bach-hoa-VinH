const { Product } = require("../models/products");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  res.send("category route");
});

module.exports = router;
