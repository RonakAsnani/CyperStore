const express = require("express");
const router = express.Router();
const Product = require("../models/productModel");
const asyncHandler = require("express-async-handler");
const mongoose = require("mongoose");

// @description    fetch all products
// @route GET /products
// @access PUBLIC
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
  })
);

// @description    fetch single products
// @route GET /products/:id
// @access PUBLIC
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    // if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    //   res.status(404).json({ message: "Invalid Id" });
    // }

    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404);
      throw new Error("Product not found");
    }
  })
);

module.exports = router;
