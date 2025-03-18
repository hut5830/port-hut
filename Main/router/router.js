const express = require('express');
const router = express.Router();
const mainController = require('../controller/controller')

router.post(`/mySelf`, mainController.getUser);

module.exports = router;