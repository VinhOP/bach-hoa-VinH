const mongoose = require("mongoose");

const imageSchema = mongoose.Schema({
  name: String,
  url: String,
  _category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
});

exports.Image = mongoose.model("Image", imageSchema);
