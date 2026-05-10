import { body, param } from "express-validator";

const validateProductId = [
  param("id")
    .isInt({ min: 1 })
    .withMessage("ID harus berupa angka bulat positif"),
];

const validateCreateProduct = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Nama produk wajib diisi")
    .isLength({ max: 255 })
    .withMessage("Nama maksimal 255 karakter"),
  body("description")
    .optional()
    .trim()
    .isLength({ max: 500 })
    .withMessage("Deskripsi maksimal 500 karakter"),
  body("priceCode").optional().trim(),
  body("price")
    .notEmpty()
    .withMessage("Harga wajib diisi")
    .isFloat({ min: 0 })
    .withMessage("Harga harus berupa angkat positif"),
  body("stock")
    .optional()
    .isInt({ min: 0 })
    .withMessage("Stok harus berupa angka non-negatif"),
  body("warrantyPeriod").optional().isInt({ min: 0 }),
  body("categoryId").optional().isInt({ min: 1 }),
];

const validateUpdateProduct = [
  body("name")
    .optional()
    .trim()
    .isLength({ max: 255 })
    .withMessage("Nama maksimal 255 karakter"),
  body("description")
    .optional()
    .trim()
    .isLength({ max: 500 })
    .withMessage("Deskripsi maksimal 500 karakter"),
  body("priceCode").optional().trim(),
  body("price")
    .optional()
    .isFloat({ min: 0 })
    .withMessage("Harga harus berupa angkat positif"),
  body("stock")
    .optional()
    .isInt({ min: 0 })
    .withMessage("Stok harus berupa angka non-negatif"),
  body("warrantyPeriod").optional().isInt({ min: 0 }),
  body("categoryId").optional().isInt({ min: 1 }),
];

export { validateProductId, validateCreateProduct, validateUpdateProduct };
