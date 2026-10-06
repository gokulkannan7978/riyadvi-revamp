const express = require('express');
const router = express.Router();

const contactRoutes = require('./contact.routes');
const consultationRoutes = require('./consultation.routes');
const healthCheckupRoutes = require('./healthCheckup.routes');
const leadMagnetRoutes = require('./leadMagnet.routes');
const careerRoutes = require('./career.routes');
const healthRoutes = require('./health.routes');

router.use('/contact', contactRoutes);
router.use('/consultation', consultationRoutes);
router.use('/health-checkup', healthCheckupRoutes);
router.use('/lead-magnet', leadMagnetRoutes);
router.use('/applications', careerRoutes);
router.use('/health', healthRoutes);

module.exports = router;
