var express = require('express');
var router = express.Router();

var newrecommendation_controller = require('../controller/newRecommendationController');

const Auth = require('../auth/authorization')


router.get('/getAllnewRec',Auth, newrecommendation_controller.getAllnewRec);

router.delete('/:text',Auth, newrecommendation_controller.delete_newRec);

router.post('/addRec',newrecommendation_controller.postNewRec);

module.exports = router;