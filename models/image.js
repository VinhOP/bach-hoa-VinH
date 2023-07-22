const mongoose = require("mongoose");

const imageSchema = mongoose.Schema({
  name: { type: String, required: true },
  url: { type: String, required: true },
  size: String,
  doc: {
    type: String,
    required: true,
    refPath: "docModel",
  },
  docModel: {
    type: String,
    required: true,
    enum: ["Category", "Product"],
  },
});

exports.Image = mongoose.model("Image", imageSchema);
