const { errorResponse } = require('../utils/apiResponse');

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const sanitize = (obj) => {
  const clean = {};

  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === 'string') {
      clean[key] = value.trim();
    } else {
      clean[key] = value;
    }
  }

  return clean;
};

const validateContact = (req, res, next) => {
  req.body = sanitize(req.body);

  const { name, email, message } = req.body;
  const errors = {};

  if (!name || name.length < 2) {
    errors.name = 'Full name is required and must be at least 2 characters.';
  }

  if (!email || !emailRegex.test(email)) {
    errors.email = 'A valid email address is required.';
  }

  if (!message || message.length < 5) {
    errors.message = 'Message is required and must be at least 5 characters.';
  }

  if (Object.keys(errors).length > 0) {
    return errorResponse(
      res,
      'Validation failed for contact inquiry.',
      400,
      errors
    );
  }

  next();
};

const validateConsultation = (req, res, next) => {
  req.body = sanitize(req.body);

  const { name, email } = req.body;
  const errors = {};

  if (!name || name.length < 2) {
    errors.name = 'Full name is required and must be at least 2 characters.';
  }

  if (!email || !emailRegex.test(email)) {
    errors.email = 'A valid email address is required.';
  }

  if (Object.keys(errors).length > 0) {
    return errorResponse(
      res,
      'Validation failed for consultation request.',
      400,
      errors
    );
  }

  next();
};

const validateHealthCheckup = (req, res, next) => {
  req.body = sanitize(req.body);

  console.log('HEALTH CHECKUP REQUEST:', req.body);

  const { business_name, name, email } = req.body;
  const errors = {};

  if (!business_name || business_name.length < 2) {
    errors.business_name = 'Business name is required.';
  }

  if (!name || name.length < 2) {
    errors.name = 'Contact name is required and must be at least 2 characters.';
  }

  if (!email || !emailRegex.test(email)) {
    errors.email = 'A valid email address is required.';
  }

  if (Object.keys(errors).length > 0) {
    console.log('HEALTH CHECKUP VALIDATION ERRORS:', errors);

    return errorResponse(
      res,
      'Validation failed for business health checkup lead.',
      400,
      errors
    );
  }

  next();
};

const validateLeadMagnet = (req, res, next) => {
  req.body = sanitize(req.body);

  const { name, email } = req.body;
  const errors = {};

  if (!name || name.length < 2) {
    errors.name = 'Full name is required and must be at least 2 characters.';
  }

  if (!email || !emailRegex.test(email)) {
    errors.email = 'A valid email address is required.';
  }

  if (Object.keys(errors).length > 0) {
    return errorResponse(
      res,
      'Validation failed for lead magnet request.',
      400,
      errors
    );
  }

  next();
};

const validateApplication = (req, res, next) => {
  req.body = sanitize(req.body);

  const { name, email, position } = req.body;
  const errors = {};

  if (!name || name.length < 2) {
    errors.name = 'Full name is required and must be at least 2 characters.';
  }

  if (!email || !emailRegex.test(email)) {
    errors.email = 'A valid email address is required.';
  }

  if (!position || position.length < 2) {
    errors.position = 'Target job position is required.';
  }

  if (Object.keys(errors).length > 0) {
    return errorResponse(
      res,
      'Validation failed for career application.',
      400,
      errors
    );
  }

  next();
};

module.exports = {
  validateContact,
  validateConsultation,
  validateHealthCheckup,
  validateLeadMagnet,
  validateApplication,
};