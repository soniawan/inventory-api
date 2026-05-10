import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProductById,
  updateProduct,
} from "../controllers/productController.js";
import {
  validateCreateProduct,
  validateProductId,
  validateUpdateProduct,
} from "../middleware/validators/productValidator.js";
import validate from "../middleware/validate.js";

const productRouter = Router();

productRouter.get("/", getAllProducts);
productRouter.post("/", validateCreateProduct, validate, createProduct);

productRouter.get("/:id", validateProductId, validate, getProductById);
productRouter.patch(
  "/:id",
  validateProductId,
  validateUpdateProduct,
  validate,
  updateProduct,
);
productRouter.delete("/:id", validateProductId, validate, deleteProduct);

export default productRouter;
