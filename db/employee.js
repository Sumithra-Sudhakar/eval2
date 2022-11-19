const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    date:{
        type: Date,
        required: true
    },
    basic:{
        type: Number,
        required: true
    },
    hra:{
        type: Number,
        required: true
    },
    da:{
        type: Number,
        required: true
    },
    ta:{
        type: Number,
        required: true
    },
    
    
    });

    const Employee = mongoose.model('Employee', EmployeeSchema);
    module.exports = {Employee};