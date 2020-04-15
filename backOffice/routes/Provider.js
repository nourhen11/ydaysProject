const express = require('express');
const router = express.Router();
const Provider = require('../controllers/Provider')




router.post('/register',Provider.register);
router.post('/products',Provider.addProduct);


module.exports = router;