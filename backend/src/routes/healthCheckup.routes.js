const express = require('express');
const router = express.Router();
const { submitHealthCheckup, getHealthCheckups } = require('../controllers/healthCheckup.controller');
const { validateHealthCheckup } = require('../middleware/validate');

router.post('/', validateHealthCheckup, submitHealthCheckup);
router.get('/', getHealthCheckups);

module.exports = router;
