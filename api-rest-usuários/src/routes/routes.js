const express = require("express");
const router = express.Router();

/* Controllers */
const HomeController = require("../controllers/HomeController");
const UserController = require("../controllers/UserController");

router.get('/', HomeController.index);
router.get('/user', UserController.index);
router.get('/user/:id', UserController.FindUser);

router.post('/user', UserController.create);

module.exports = router;