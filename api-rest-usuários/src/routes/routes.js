const express = require("express");
const router = express.Router();

/* Controllers */
const HomeController = require("../controllers/HomeController");
const UserController = require("../controllers/UserController");

router.get('/', HomeController.index);
router.get('/user', UserController.index);
router.get('/user/:id', UserController.FindUser);

router.put('/user', UserController.edit);

router.post('/user', UserController.create);

module.exports = router;