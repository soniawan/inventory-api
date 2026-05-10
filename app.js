import express from "express";
import "dotenv/config";
import { errorMiddleware } from "./utils/ErrorHandler.js";
import productRouter from "./routes/productRouter.js";

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/api/products", productRouter);

// error middleware
app.use(errorMiddleware);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
