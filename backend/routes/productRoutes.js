import express from "express";
import Product from "../models/productModel.js";
import colors from "colors";
import asyncHandler from "express-async-handler";

const router = express.Router();

// @description - Fetch all products
// @router GET /api/products
// @access Public
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.status(200).json(products);
  })
);

// @description - Fetch a products
// @router GET /api/products/:id
// @access Public
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id).exec();
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404);
      throw new Error("Product not found");
    }
  })
);

export default router;
