const express = require('express');
const router = express.Router();
const mainController = require('../controller/controller')

router.post(`/mySelf`, mainController.getUser);
router.post(`/mySelfPrograms`, mainController.getMyselfProgram);
router.post(`/mySelfDetail`, mainController.getMyselfDetail); 

module.exports = router;