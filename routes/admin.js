const { Category } = require("../models/category");
// const { Image } = require("../models/image");
const express = require("express");
const router = express.Router();
const multer = require("multer");
const { storage } = require("../firebase");
const {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} = require("firebase/storage");
const path = require("path");

const upload = multer();

router.get("/api", async (req, res) => {
  const categories = await Category.find({}, "-__v");

  res.send(categories);
});

router.post("/api", upload.single("image"), async (req, res) => {
  try {
    // check tên của category có tồn tại hay không
    const existCategoryName = await Category.findOne({ name: req.body.name });
    if (existCategoryName) {
      res.send("tên đã tồn tại");
      return;
    }

    const imageRef = ref(
      storage,
      `category/${Date.now() + path.extname(req.file.originalname)}` // định nghĩa tên file trong storage
    );

    const imageData = await uploadBytes(imageRef, req.file.buffer); // upload ảnh lên cloud
    const imageURL = await getDownloadURL(imageRef); // lấy link download của ảnh

    // tạo category và lưu vào db
    let category = new Category({
      name: req.body.name,
      image: {
        name: imageData.metadata.name,
        url: imageURL,
        size: imageData.metadata.size,
      },
    });

    category = await category.save();

    res.send({
      message: "Thêm thành công",
      category: category,
    });
  } catch (err) {
    res.send(err);
  }
});

router.delete("/api/:category_id", async (req, res) => {
  const deletedCategory = await Category.findByIdAndDelete(
    req.params.category_id
  );
  res.send({ message: "Xóa category thành công", category: deletedCategory });
});

router.delete("/api/image/:image_name", async (req, res) => {
  const imageRef = ref(storage, `category/${req.params.image_name}`);

  try {
    const deletedImg = await deleteObject(imageRef);
    res.send({ message: "Xóa ảnh thành công", image: deletedImg });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
