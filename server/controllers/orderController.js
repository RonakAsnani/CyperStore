const Order = require("../models/orderModel");
const asyncHandler = require("express-async-handler");
const Product = require("../models/productModel");

// @description  Create new order
// @route POST /orders
// @access Private
const addOrderItems = asyncHandler(async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;

  orderItems.forEach(async (item) => {
    console.log(item);
    let lookupItem = await Product.findById(item.product);
    console.log(lookupItem);
    if (item.price !== lookupItem.price) {
      res.status(400);
      throw new Error("Order placed error");
    }
  });

  if (orderItems && orderItems.length === 0) {
    res.status(400);
    throw new Error("No order items");
  } else {
    const order = new Order({
      orderItems,
      user: req.user._id,
      shippingAddress,
      paymentMethod,
      itemPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    });

    const createdOrder = await order.save();

    res.status(201).json(createdOrder);
  }
});

module.exports = { addOrderItems };
