const express = require('express');
const productController = require('../../../controllers/products')
const router = express.Router();

router.get('/', productController.productsSortSearchAndFilters);
router.get('/delete', productController.deleteProduct);
module.exports = router;