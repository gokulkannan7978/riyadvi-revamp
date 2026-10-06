const express = require('express');
const router = express.Router();
const { submitLeadMagnet, getLeadMagnets } = require('../controllers/leadMagnet.controller');
const { validateLeadMagnet } = require('../middleware/validate');

router.post('/', validateLeadMagnet, submitLeadMagnet);
router.get('/', getLeadMagnets);

module.exports = router;
