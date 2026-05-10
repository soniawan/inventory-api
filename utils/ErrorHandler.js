export const errorMiddleware = (err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Internal Server Error";

  const response = {
    success: false,
    message: message,
  };

  // Kalau ada detail error validasi, sertakan juga
  if (err.errors) {
    response.errors = err.errors;
  }

  // Jangan expose stack trace di production
  if (process.env.NODE_ENV === "development") {
    response.stack = err.stack;
  }

  res.status(status).json(response);
};
