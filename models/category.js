const mongoose = require("mongoose");

const categorySchema = mongoose.Schema(
  {
    name: String,
    image: {
      name: String,
      url: String,
      size: Number,
    },
  },
  { timestamps: true }
);

exports.Category = mongoose.model("Category", categorySchema);
