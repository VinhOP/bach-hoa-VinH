const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  _image: { type: mongoose.Schema.Types.ObjectId, ref: "Image" },
});

exports.Category = mongoose.model("Category", categorySchema);
