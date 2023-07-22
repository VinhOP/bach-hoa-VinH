const mongoose = require("mongoose");

module.exports = async () => {
  try {
    const connection = await mongoose.connect(process.env.ATLAS_URI);
    console.log("connect to mongoDB successful");
  } catch (err) {
    console.log(err);
    console.log("failed to connect to mongoDB");
  }
};
