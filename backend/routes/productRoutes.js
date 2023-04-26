import express from "express";
import {
  getProductById,
  getProducts,
} from "../controllers/productController.js";
import colors from "colors";

const router = express.Router();

// @description - Fetch all products
// @router GET /api/products
// @access Public
router.route("/").get(getProducts);

// @description - Fetch a products
// @router GET /api/products/:id
// @access Public
router.route("/:id").get(getProductById);

export default router;
