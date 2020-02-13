const express = require('express');
const router = express.Router();

const providers = require('../controllers/provider');
router.get('/provider', providers.getproviders);
router.get('/provider/:id', providers.getprovider);


module.exports = router;