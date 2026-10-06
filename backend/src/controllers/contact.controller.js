const ContactModel = require('../models/contact.model');
const { successResponse, errorResponse } = require('../utils/apiResponse');

const submitContact = async (req, res, next) => {
  try {
    const contact = await ContactModel.create(req.body);
    return successResponse(
      res,
      contact,
      'Thank you! Your contact inquiry has been received. Our team will get back to you shortly.',
      201
    );
  } catch (error) {
    next(error);
  }
};

const getContacts = async (req, res, next) => {
  try {
    const limit = parseInt(req.query.limit || '50', 10);
    const offset = parseInt(req.query.offset || '0', 10);
    const contacts = await ContactModel.findAll({ limit, offset });
    return successResponse(res, contacts, 'Contact enquiries retrieved successfully.');
  } catch (error) {
    next(error);
  }
};

module.exports = {
  submitContact,
  getContacts,
};
