var express = require('express');
var router = express.Router();

var product_controller = require('../controller/productController');

router.get('/getAllProduct', product_controller.getAllProduct);

router.put('/:id', product_controller.updateItemById)

module.exports = router;