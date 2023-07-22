const { Category } = require("../models/category");
const { Image } = require("../models/image");
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
const mongoose = require("mongoose");

const db = mongoose.connection;

const upload = multer();

router.get("/api/category", async (req, res) => {
  let categories = await Category.find({}, "-__v").populate("image");
  res.send(categories);
});

router.post("/api/category", upload.single("image"), async (req, res) => {
  const imageRef = ref(
    storage,
    `category/${Date.now() + path.extname(req.file.originalname)}` // định nghĩa tên file trong storage
  );

  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    // check tên của category có tồn tại hay không
    const existCategoryName = await Category.findOne({ name: req.body.name });
    if (existCategoryName) {
      res.send("tên đã tồn tại");
      return;
    }

    const imageData = await uploadBytes(imageRef, req.file.buffer); // upload ảnh lên cloud
    const imageURL = await getDownloadURL(imageRef); // lấy link download của ảnh

    // tạo category và lưu vào db

    let category = new Category({
      name: req.body.name,
    });

    category = await category.save({ session });

    let image = new Image({
      name: imageData.metadata.name,
      url: imageURL,
      size: imageData.metadata.size,
      doc: category._id,
      docModel: "Category",
    });

    image = await image.save({ session });

    category.image = image._id;

    category = await category.save({ session });
    await session.commitTransaction();

    category = await category.populate("image");

    res.send({
      message: "Thêm thành công",
      category: category,
    });
  } catch (err) {
    console.log(err);
    res.send(err);
    session.abortTransaction();
    deleteObject(imageRef); // xóa ảnh trên cloud
  }

  session.endSession();
});

//xóa category và image trong db
router.delete("/api/category/:category_id", async (req, res) => {
  let deletedCategory = await Category.findByIdAndDelete(
    req.params.category_id
  );

  deletedCategory = await deletedCategory.populate("image");

  let deletedImg = await Image.findByIdAndDelete(deletedCategory.image._id);
  res.send({ message: "Xóa category thành công", category: deletedCategory });
});

//xóa image trên cloud
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
