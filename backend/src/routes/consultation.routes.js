const express = require('express');
const router = express.Router();
const { submitConsultation, getConsultations } = require('../controllers/consultation.controller');
const { validateConsultation } = require('../middleware/validate');
console.log('validateConsultation:', typeof validateConsultation);
console.log('submitConsultation:', typeof submitConsultation);

router.post('/', validateConsultation, submitConsultation);
router.get('/', getConsultations);

module.exports = router;
