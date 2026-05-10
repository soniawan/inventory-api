class ValidationError extends Error {
  constructor(message, errors) {
    super(message);
    this.status = 422;
    this.name = "ValidationError";
    this.errors = errors;
  }
}

export default ValidationError;
