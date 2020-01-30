const express = require('express');
const router = express.Router();

const productCtr = require('../controllers/product');

router.get('/product', productCtr.test);

module.exports = router;