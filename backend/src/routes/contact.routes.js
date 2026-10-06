const express = require('express');
const router = express.Router();
const { submitContact, getContacts } = require('../controllers/contact.controller');
const { validateContact } = require('../middleware/validate');

router.post('/', submitContact);
router.get('/', getContacts);

module.exports = router;
