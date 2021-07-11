const Product = require("../models/productModel");
const asyncHandler = require("express-async-handler");

// @description    fetch all products
// @route GET /products
// @access PUBLIC
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

// @description    fetch single products
// @route GET /products/:id
// @access PUBLIC
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

module.exports = { getProductById, getProducts };
