import express from "express";
import { addOrderItems, getOrderById } from "../controllers/orderController.js";
import { protect } from "../middleware/authMiddleware.js";
import colors from "colors";

const router = express.Router();

// @description - Fetch all products
// @router GET /api/products
// @access Public
router.route("/").post(protect, addOrderItems);
router.route("/:id").get(protect, getOrderById);
export default router;
