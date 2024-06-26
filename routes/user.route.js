const express = require("express");
const router = express.Router();
const bcrypt = require('bcrypt');

const userController = require('../controller/userController');

router.post("/signup", userController.signUp);
router.post("/login", userController.login);

module.exports = router;