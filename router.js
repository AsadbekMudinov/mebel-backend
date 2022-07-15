const express = require("express");
const router = express.Router();
const adminRouter = require("./admin/admin.router");
const orderRouter = require("./orders/order.router");
const fileRoutes = require("./product/product.router");
const expenseRouter = require('./contact/expense.router')
const path = require("path");

http://localhost:5000/admin
router.use("/admin", adminRouter);

// http://localhost:5000/order
router.use("/order", orderRouter);

router.use("/uploads", express.static(path.join(__dirname, "uploads")));

// http://localhost:5000/product
router.use("/product", fileRoutes.routes);

router.use('/contact', expenseRouter);

module.exports = router;
