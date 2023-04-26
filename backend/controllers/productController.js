import Product from "../models/productModel.js";
import colors from "colors";
import asyncHandler from "express-async-handler";

// @description - Fetch all products
// @router GET /api/products
// @access Public
const getProducts = asyncHandler(async () => {
  const products = await Product.find({});
  res.status(200).json(products);
});

// @description - Fetch a products
// @router GET /api/products/:id
// @access Public
const getProductById = asyncHandler(async () => {
  const product = await Product.findById(req.params.id).exec();
  if (product) {
    res.status(200).json(product);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

export { getProducts, getProductById };
