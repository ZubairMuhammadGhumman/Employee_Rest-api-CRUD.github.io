// packages import
const express = require('express');
// add database
require("./db/conn");
// Employee Model Import
const Employee = require("./models/Employee");
// add functionality of express
const app = express();

// add port number
const port = process.env.PORT || 3000;
// add json object
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Hello from Server by Osama");
})

// Create Employee Data
app.post("/employees", async (req,res)=>{
    //console.log(req.body);
    try {
        const employee = new Employee(req.body);
        await employee.save();
        res.status(201).send(employee);
    } catch (error) {
        res.status(400).send(error);
    }
})

// Read All Employee Data
app.get("/employees", async (req,res)=>{
    try {
        const employee = await Employee.find();
        res.status(200).send(employee);
    } catch (error) {
        res.send(error);
    }
})

// Read Employee Data By Id
app.get("/employees/:id", async (req,res)=>{
    try {
        const employee = await Employee.findById(req.params.id);
        if(!employee){
            res.status(404).send();
        }else{
            res.status(200).send(employee);
        }
    } catch (error) {
        res.status(404).send(error);
    }
})

// Update Employee Data By Id
app.patch("/employees/:id", async (req,res) =>{
    try {
        const employee = await Employee.findByIdAndUpdate(req.params.id,req.body,{
            new: true
        });
        if(!employee){
            res.status(404).send();
        }else{
            res.status(200).send(employee);
        }
    } catch (error) {
        res.status(404).send(error);
    }
})

// Update Employee Data By Id
app.put("/employees/:id", async (req,res) =>{
    try {
        const employee = await Employee.findByIdAndUpdate(req.params.id,req.body,{
            new: true
        });
        if(!employee){
            res.status(404).send();
        }else{
            res.status(200).send(employee);
        }
    } catch (error) {
        res.status(404).send(error);
    }
})
// Delete Employee
app.delete("/employees/:id", async (req,res)=>{
    try {
        const employee = await Employee.findByIdAndDelete(req.params.id);
        if(!employee){
            res.status(404).send();
        }else{
            res.status(200).send(employee);
        }
    } catch (error) {
        res.status(500).send(error);
    }
})

// Server is listening 
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})
