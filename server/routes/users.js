var express = require('express');
var router = express.Router();

var user_controller = require('../controller/userController');

router.post('/newUser', user_controller.createNewUser);

router.post('/email',user_controller.email)

module.exports = router;