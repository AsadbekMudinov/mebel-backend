"use strict";
const Product = require("./product.model");

async function updateProduct(req, res) {
  try {
    console.log(req.body)
    const productId = req.params._id;
    let item = await Product.findOne({_id:productId})
    let filesArray = [];
    if(req.files){
      
      req.files.forEach((element) => {
        const file = {
          fileName: element.originalname,
          filePath: element.path,
          fileType: element.mimetype,
          fileSize: fileSizeFormatter(element.size, 2),
        };
        filesArray.push(file);
      });
    }
    if(req.body.name){
      item.name = req.body.name
    }
    if(req.body.category){
      item.category = req.body.category
    }
    if(req.body.type){
      item.type = req.body.type
    }
    if(req.body.title){
      item.title = req.body.title
    }
    if(req.body.price){
      item.price = req.body.price
    }
    if(req.files){
      item.files = filesArray
    }
    console.log(item)
   await item.save()
   console.log(item)
   return res.status(200).send("update`");
  } catch (err) {
    console.log(err)
    return res.status(400).send(err);
  }
}

const addProduct = async (req, res) => {
  try {
    let foo = await Product.find();
    let filesArray = [];
    req.files.forEach((element) => {
      const file = {
        fileName: element.originalname,
        filePath: element.path,
        fileType: element.mimetype,
        fileSize: fileSizeFormatter(element.size, 2),
      };
      filesArray.push(file);
    });
    const multipleFiles = new Product({
      name: req.body.name,
      category: req.body.category,
      type: req.body.type,
      title: req.body.title,
      price: req.body.price,
      files: filesArray,
      id: foo.length + 1,
      count: req.body.count
     
    });
    await multipleFiles.save();
   return res.status(201).send("Files Uploaded Successfully");
  } catch (error) {
    console.log(error)
   return res.status(400).send(error.message);
  }
};

const getProduct = async (req, res, next) => {
  try {
    const files = await Product.find();
  return  res.status(200).send(files);
  } catch (error) {
   return res.status(400).send(error.message);
  }
};

const fileSizeFormatter = (bytes, decimal) => {
  if (bytes === 0) {
    return "0 Bytes";
  }
  const dm = decimal || 2;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "YB", "ZB"];
  const index = Math.floor(Math.log(bytes) / Math.log(1000));
  return (
    parseFloat((bytes / Math.pow(1000, index)).toFixed(dm)) + " " + sizes[index]
  );
};

async function deleteProduct(req, res) {
  try {
    const productId = req.params._id;
    await Product.findByIdAndDelete(productId);
    return res.status(200).json("productId ochirildi ");
  } catch (err) {
    return res.status(400).send(err);
  }
}

module.exports = {
  addProduct,
  getProduct,
  deleteProduct,
  updateProduct,
};
