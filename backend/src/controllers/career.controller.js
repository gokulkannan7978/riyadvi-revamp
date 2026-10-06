const CareerModel = require('../models/career.model');
const { successResponse } = require('../utils/apiResponse');

const submitApplication = async (req, res, next) => {
  try {
    const application = await CareerModel.create(req.body);
    return successResponse(
      res,
      application,
      'Your career application has been submitted successfully. Our talent team will review your profile.',
      201
    );
  } catch (error) {
    next(error);
  }
};

const getApplications = async (req, res, next) => {
  try {
    const limit = parseInt(req.query.limit || '50', 10);
    const offset = parseInt(req.query.offset || '0', 10);
    const applications = await CareerModel.findAll({ limit, offset });
    return successResponse(res, applications, 'Career applications retrieved successfully.');
  } catch (error) {
    next(error);
  }
};

module.exports = {
  submitApplication,
  getApplications,
};
