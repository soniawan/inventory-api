import { validationResult } from "express-validator";
import ValidationError from "../utils/ValidationError.js";

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw new ValidationError("Validation failled", errors.array());
  }
  next();
};

export default validate;
