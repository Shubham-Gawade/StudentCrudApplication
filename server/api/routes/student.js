const express = require("express");
const router = express.Router();

const StudentController = require('../controllers/student');

router.post("/studentSignup", StudentController.student_signup);

module.exports = router;