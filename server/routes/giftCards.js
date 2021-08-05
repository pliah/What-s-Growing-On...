var express = require('express');
var router = express.Router();

var giftcard_controller = require('../controller/giftCardController');

router.get('/getAllGiftCard', giftcard_controller.getAllGiftCard);

router.get('/getAllGiftCard/:id', giftcard_controller.addToBasketById);

router.put('/:id', giftcard_controller.updateItemById)
module.exports = router;