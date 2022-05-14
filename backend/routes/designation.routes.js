const express = require('express');
const router = express.Router();
const controller = require('../controller/designation.controller');
const { isAuth } = require('../utils');

router.get('/api/designations', controller.getDesignations);
router.get('/api/designations/:id', isAuth, controller.getDesignation);

module.exports = router;