const express = require('express');
const router = express.Router();
const Provider = require('../controllers/Provider')

router.get('/hello',Provider.Test);

module.exports = router;