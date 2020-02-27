const express = require('express');
const router = express.Router();

const categories = require('../controllers/categorie');
router.get('/categorie', categories.getcategories);
router.get('/categorie/:id', categories.getcategorie);


module.exports = router;