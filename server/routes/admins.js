var express = require('express');
var router = express.Router();

var admin_controller = require('../controller/adminController');

const Auth = require('../auth/authorization');

router.get('/getAllAdmins', admin_controller.getAlladmins);

router.post('/newAdmin',Auth,admin_controller.creatNewAdmin)

router.post('/login',admin_controller.login)

module.exports = router;