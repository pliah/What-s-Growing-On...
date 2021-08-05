var express = require('express');
var router = express.Router();

var recommendation_controller = require('../controller/recommendationController');

router.get('/getAllRecommendation', recommendation_controller.getAllRecommendation);

router.post('/newRec', recommendation_controller.createNewRec);

module.exports = router;