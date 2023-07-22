const mongoose = require("mongoose");

const categorySchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    image: { type: mongoose.Schema.Types.ObjectId, ref: "Image" },
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
  },
  { timestamps: true }
);

exports.Category = mongoose.model("Category", categorySchema);
