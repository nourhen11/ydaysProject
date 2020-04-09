const express = require('express');
const router = express.Router();
const Provider = require('../controllers/Provider')


router.get('/hello',Provider.Test);

router.post('providers',Provider.addProvider);
router.post('products/:id_provider',Provider.addProduct);



module.exports = router;