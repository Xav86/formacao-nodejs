const express = require('express');
const router = express.Router();

/* controller */

const IndexController = require('../controller/IndexController');

router.get('/', IndexController.home);

module.exports = router;