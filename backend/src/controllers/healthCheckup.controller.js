const HealthCheckupModel = require('../models/healthCheckup.model');
const { successResponse } = require('../utils/apiResponse');

const submitHealthCheckup = async (req, res, next) => {
  try {
    const lead = await HealthCheckupModel.create(req.body);
    return successResponse(
      res,
      lead,
      'Your Business Health Checkup has been received. Our solutions team will analyze your digital footprint and prepare your growth roadmap.',
      201
    );
  } catch (error) {
    next(error);
  }
};

const getHealthCheckups = async (req, res, next) => {
  try {
    const limit = parseInt(req.query.limit || '50', 10);
    const offset = parseInt(req.query.offset || '0', 10);
    const leads = await HealthCheckupModel.findAll({ limit, offset });
    return successResponse(res, leads, 'Business Health Checkup leads retrieved successfully.');
  } catch (error) {
    next(error);
  }
};

module.exports = {
  submitHealthCheckup,
  getHealthCheckups,
};
