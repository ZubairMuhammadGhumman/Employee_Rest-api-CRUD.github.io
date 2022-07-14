// packages import
const mongoose = require("mongoose");
//var validator = require('validator');
// define Employee Schema
const EmployeeSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength:2,
    maxlength: 30,
    required: true,
  },
  job: {
    type: String,
    minlength:2,
    maxlength: 30,
    required: true,
  },
  department: {
    type: String,
    minlength:2,
    maxlength: 50,
    required: true,
  },
  salary: {
    type: Number,
    min: [0,"Your Value Less then 0"],
    required: true,
  },
  hire_date: {
    type: String,
    //default: Date.now,
    required: true,
  },
});

// Create Model 
const Employee = mongoose.model("Employee", EmployeeSchema);

module.exports = Employee;