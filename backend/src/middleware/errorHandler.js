const { errorResponse } = require('../utils/apiResponse');

const notFoundHandler = (req, res) => {
  return errorResponse(res, `Endpoint not found: ${req.method} ${req.originalUrl}`, 404);
};

const globalErrorHandler = (err, req, res, next) => {
  console.error('[Global Error Handler]:', err.stack || err.message || err);

  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal server error occurred.';

  const errors = process.env.NODE_ENV === 'development' ? { stack: err.stack } : null;

  return errorResponse(res, message, statusCode, errors);
};

module.exports = {
  notFoundHandler,
  globalErrorHandler,
};
