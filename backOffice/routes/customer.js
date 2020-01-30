const express = require('express');
const router = express.Router();
const customerCtr = require('../controllers/customer');
router.get('/customer', customerCtr.getClients);
router.get('/customer/:id', customerCtr.getClient);
module.exports = router;