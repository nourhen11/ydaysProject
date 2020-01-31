const express = require('express');
const router = express.Router();

const productCtr = require('../controllers/product');

router.get('/products', productCtr.getProducts);
router.get('/products/:id', productCtr.getProductById);
router.get('/products/:id/category', productCtr.getProductsByIdCategory);
router.get('/products/:id/providers', productCtr.getProductsByIdProvider);







module.exports = router;