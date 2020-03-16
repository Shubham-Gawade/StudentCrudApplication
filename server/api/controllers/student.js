const mongoose = require("mongoose");
//const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Student = require("../models/student");

exports.student_signup = async (req, res, next) => {
  
  const alreadystudent = await Student.findOne({email: req.body.email});

  if(alreadystudent){
    return res.status(404).json({
      msg : "Email already exist"
    });
  }

  const student =new Student({
    _id: new mongoose.Types.ObjectId(),
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    mobileno: req.body.mobileno,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password
  });

  student.save().then((response) =>{
    res.status(200).json({ msg: "Registration Successful" });
  }).catch((error)=>{
    res.status(500).json({ msg: "Registration failed" });
  });
  
};

exports.student_display = async (req, res, next) => {
  
  const student = await Student.find({ });

  if(!student) {
    return res.status(404).json({
      msg: "Can not Display Students"
    });
  }
  else {
    return res.status(201).json({
      msg: "Display Students Done",
      student: student
    });
  }
};
