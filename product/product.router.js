"use strict";

const express = require("express");
const { upload } = require("../helpers/filehelper");
const {
  addProduct,
  getProduct,
  deleteProduct,
  updateProduct,
} = require("./product.controller");
const router = express.Router();

router.post("/addProduct", upload.array("files"), addProduct);

router.get("/", getProduct);

router.delete("/:_id", deleteProduct);
router.patch("/:_id",upload.array("files"), updateProduct);

module.exports = {
  routes: router,
};
