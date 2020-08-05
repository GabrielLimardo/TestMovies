// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const productsController = require('../controllers/IndexController');

router.get('/', productsController.root); /* GET - All products */


module.exports = router;
