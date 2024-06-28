const express = require("express");
const router = express.Router();

/* Controllers */
const HomeController = require("../controllers/HomeController");
const UserController = require("../controllers/UserController");

router.get('/', HomeController.index);
router.get('/user', UserController.index);
router.get('/user/:id', UserController.FindUser);

router.post('/recoverpassword', UserController.recoverPassword);
router.post('/user', UserController.create);

router.put('/user', UserController.edit);

router.delete('/user/:id', UserController.remove);

module.exports = router;