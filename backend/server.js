import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/dB.js";
import cors from "cors";
import colors from "colors";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config();
connectDB();
const app = express();
const PORT = process.env.PORT || 3000;

/**bodyParser */
app.use(express.json());
/**cors implementation */
app.use(cors());
app.get("/", (req, res) => {
  res.send("API is running....");
});

/**Routes Middleware */
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);

/**404 Fallback handler */
app.use(notFound);
/**Error Handler */
app.use(errorHandler);

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold
  )
);
