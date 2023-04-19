import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/dB.js";
import cors from "cors";
import colors from "colors";
import productRoutes from "./routes/productRoutes.js";
dotenv.config();
connectDB();
const app = express();
const PORT = process.env.PORT || 3000;

/**cors implementation */
app.use(cors());
app.get("/", (req, res) => {
  res.send("API is running....");
});

/**Routes Middleware */
app.use("/api/products", productRoutes);

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold
  )
);
