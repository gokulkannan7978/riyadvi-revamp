const LeadMagnetModel = require('../models/leadMagnet.model');
const { successResponse } = require('../utils/apiResponse');

const submitLeadMagnet = async (req, res, next) => {
  try {
    const lead = await LeadMagnetModel.create(req.body);
    return successResponse(
      res,
      lead,
      'Your Software Project Planning Guide has been generated. Access details have been recorded.',
      201
    );
  } catch (error) {
    next(error);
  }
};

const getLeadMagnets = async (req, res, next) => {
  try {
    const limit = parseInt(req.query.limit || '50', 10);
    const offset = parseInt(req.query.offset || '0', 10);
    const leads = await LeadMagnetModel.findAll({ limit, offset });
    return successResponse(res, leads, 'Lead magnet requests retrieved successfully.');
  } catch (error) {
    next(error);
  }
};

module.exports = {
  submitLeadMagnet,
  getLeadMagnets,
};
