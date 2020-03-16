const express = require("express");
const router = express.Router();

const StudentController = require('../controllers/student');

router.post("/studentSignup", StudentController.student_signup);

router.get("/studentDisplay", StudentController.student_display);

router.delete("/studentDelete/:id", StudentController.student_delete);

module.exports = router;