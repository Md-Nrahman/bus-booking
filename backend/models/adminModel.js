const mongoose = require('mongoose');


const adminSchema = new mongoose.Schema({
    userName:{
        type: String,
        required: {value: true, message: 'Username is required'},
        maxLength: {value: 10, message: 'Username must be less than 10 characters'}

    },
    password:{
        type: String,
        required: {value: true, message: 'Password is required'},
        maxLength: {value: 20, message: 'Password must be less than 20 characters'},
        minLength: {value: 8, message: 'Password must be greater than 8 characters'},
    },
    staffId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Staff',
    }
},{
    timestamps: true
});