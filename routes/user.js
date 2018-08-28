const express = require('express'),
    router = express.Router(),
    UserController = require('../controllers/user.controller');

router.route('/:user').get(UserController.fetchUser);

module.exports = router;