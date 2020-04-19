const express = require('express');
const router = express.Router();
const Provider = require('../controllers/Provider')



router.get('/:id',Provider.getProviderById)
router.post('/register',Provider.register);
router.post('/login',Provider.login);

router.post('/products',Provider.addProduct);


module.exports = router;