import "dotenv/config";
import express from "express";
import productRouter from "./routes/productRouter.js";
const app = express();

app.use("/products", productRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`Server running on http://localhost:${PORT}`);
});
