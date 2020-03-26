const express = require('express');
const router = express.Router();
const Admin = require('../controllers/Admin')

router.get('/hello',Admin.Test);

module.exports = router;