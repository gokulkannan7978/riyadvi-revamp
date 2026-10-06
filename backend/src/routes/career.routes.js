const express = require('express');
const router = express.Router();
const { submitApplication, getApplications } = require('../controllers/career.controller');
const { validateApplication } = require('../middleware/validate');

router.post('/', validateApplication, submitApplication);
router.get('/', getApplications);

module.exports = router;
