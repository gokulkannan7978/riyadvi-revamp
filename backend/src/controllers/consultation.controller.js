const ConsultationModel = require('../models/consultation.model');
const { successResponse } = require('../utils/apiResponse');

const submitConsultation = async (req, res, next) => {
  try {
    const consultation = await ConsultationModel.create(req.body);
    return successResponse(
      res,
      consultation,
      'Your strategy consultation request has been booked successfully.',
      201
    );
  } catch (error) {
    next(error);
  }
};

const getConsultations = async (req, res, next) => {
  try {
    const limit = parseInt(req.query.limit || '50', 10);
    const offset = parseInt(req.query.offset || '0', 10);
    const consultations = await ConsultationModel.findAll({ limit, offset });
    return successResponse(res, consultations, 'Consultation requests retrieved successfully.');
  } catch (error) {
    next(error);
  }
};

module.exports = {
  submitConsultation,
  getConsultations,
};
