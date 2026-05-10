import { matchedData } from "express-validator";
import productModel from "../models/productModel.js";
import NotFoundError from "../utils/NotFoundError.js";

const getAllProducts = async (req, res, next) => {
  try {
    const products = await productModel.getAllProducts();
    res.json({ success: true, data: products });
  } catch (e) {
    next(e);
  }
};

const getProductById = async (req, res, next) => {
  try {
    const { id } = matchedData(req);
    const product = await productModel.getProductById(Number(id));

    if (!product) {
      throw new NotFoundError("Product not found");
    }

    res.json({
      success: true,
      data: product,
    });
  } catch (e) {
    next(e);
  }
};

const createProduct = async (req, res, next) => {
  try {
    const productData = matchedData(req);
    const product = await productModel.insertProduct(productData);

    res.status(201).json({
      success: true,
      message: "Product created",
      data: product,
    });
  } catch (e) {
    next(e);
  }
};

const updateProduct = async (req, res, next) => {
  try {
    const { id, ...productData } = matchedData(req);
    const updated = await productModel.updateProduct(Number(id), productData);

    if (!updated) {
      throw new NotFoundError("Product not found");
    }

    res.json({
      success: true,
      message: "Product updated",
      data: updated,
    });
  } catch (e) {
    next(e);
  }
};

const deleteProduct = async (req, res, next) => {
  try {
    const { id } = matchedData(req);
    const deleted = await productModel.deleteProduct(Number(id));

    if (!deleted) throw new NotFoundError("Product not found");

    res.json({
      success: true,
      message: "Product deleted",
      data: deleted,
    });
  } catch (e) {
    next(e);
  }
};

export {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
