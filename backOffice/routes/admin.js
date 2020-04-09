const express = require('express');
const router = express.Router();

const product  = require('../controllers/admin');
router.get('/products', product.getproducts);
router.get('/products/:id', product.getProductById);



module.exports = router;