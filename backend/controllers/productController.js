import mongoose from "mongoose";
const Schema = mongoose.Schema;
import colors from "colors";
const ObjectId = Schema.ObjectId;
import Product from "../models/productModel.js";

import asyncHandler from "express-async-handler";

// @description - Fetch all products
// @router GET /api/products
// @access Public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.status(200).json(products);
});

// @description - Fetch a products
// @router GET /api/products/:id
// @access Public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findOne(req.params["_id"]);
  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

export { getProducts, getProductById };
