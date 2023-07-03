const { Category } = require("../models/category");
const { Image } = require("../models/image");
const express = require("express");
const router = express.Router();
const multer = require("multer");
const { storage } = require("../firebase");
const { ref, uploadBytes, getDownloadURL } = require("firebase/storage");
const path = require("path");
const { default: mongoose } = require("mongoose");

const upload = multer();

router.get("/api", (req, res) => {});

router.post("/api", upload.single("image"), async (req, res) => {
  try {
    const imageRef = ref(
      storage,
      `category/${Date.now() + path.extname(req.file.originalname)}` // định nghĩa tên file trong storage
    );
    const imageData = await uploadBytes(imageRef, req.file.buffer); // upload ảnh lên cloud
    const imageURL = await getDownloadURL(imageRef); // lấy link download của ảnh

    // check tên của category có tồn tại hay không
    const existCategoryName = await Category.findOne({ name: req.body.name });
    if (existCategoryName) {
      res.send("tên đã tồn tại");
      return;
    }

    // tạo category và lưu vào db
    let category = new Category({
      _id: new mongoose.Types.ObjectId(),
      name: req.body.name,
    });

    category = await category.save();

    // tạo image và lưu vào db
    let image = new Image({
      name: imageData.metadata.name,
      url: imageURL,
      _category: category._id,
    });

    image = await image.save();

    res.send({
      message: "Thêm thành công",
    });
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
