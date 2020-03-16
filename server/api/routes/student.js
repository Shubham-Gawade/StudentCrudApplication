const express = require("express");
const router = express.Router();

const StudentController = require('../controllers/student');

router.post("/studentSignup", StudentController.student_signup);

router.get("/studentDisplay", StudentController.student_display);

router.get("/", StudentController.student_display);

module.exports = router;