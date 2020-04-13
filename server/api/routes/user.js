const express = require("express");
const router = express.Router();
const checkAuth = require("../middleware/check-auth");

const UserController = require('../controllers/user');

router.post("/signup", UserController.user_signup);

router.post("/login", UserController.user_login);

router.post("/forgetpassword", UserController.user_forget_password);

router.post("/homepage", checkAuth, UserController.user_homepage);

module.exports = router;