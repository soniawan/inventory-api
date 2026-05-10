import { param } from "express-validator";
import db from "../config/db.js";

const getAllProducts = async () => {
  const { rows } = await db.query("SELECT * FROM products ORDER BY id ASC");
  return rows;
};

const getProductById = async (id) => {
  const { rows } = await db.query("SELECT * FROM products WHERE id = $1", [id]);
  return rows[0] || null;
};

const insertProduct = async (productData) => {
  const {
    name,
    description,
    priceCode,
    price,
    stock,
    warrantyPeriod,
    categoryId,
  } = productData;

  const { rows } = await db.query(
    "INSERT INTO products (name, description, price_code, price, stock, warranty_period, category_id) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
    [name, description, priceCode, price, stock, warrantyPeriod, categoryId],
  );

  return rows[0];
};

const updateProduct = async (id, productData) => {
  const fieldMap = {
    name: "name",
    description: "description",
    priceCode: "price_code",
    price: "price",
    stock: "stock",
    warrantyPeriod: "warranty_period",
    categoryId: "category_id",
  };

  const fields = [];
  const values = [];
  let paramIndex = 1;

  for (const [jsKey, dbColumn] of Object.entries(fieldMap)) {
    if (productData[jsKey] !== undefined) {
      fields.push(`${dbColumn} = $${paramIndex}`);
      values.push(productData[jsKey]);
      paramIndex++;
    }
  }

  if (fields.length === 0) return null;

  values.push(id);

  const { rows } = await db.query(
    `UPDATE products SET ${fields.join(", ")} WHERE id = $${paramIndex} RETURNING *`,
    values,
  );

  return rows[0] || null;
};

const deleteProduct = async (id) => {
  const { rows } = await db.query(
    "DELETE FROM products WHERE id = $1 RETURNING *",
    [id],
  );
  return rows[0] || null;
};

export default {
  getProductById,
  getAllProducts,
  insertProduct,
  updateProduct,
  deleteProduct,
};
