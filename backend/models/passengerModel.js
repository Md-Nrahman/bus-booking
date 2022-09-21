const mongoose = require('mongoose');



const passengerSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: {value: true, message: 'First name is required'},
        maxLength: {value: 10, message: 'First name must be less than 10 characters'}
    },
    middleName:{
        type: String,
    },
    lastName:{
        type: String,
        required: {value: true, message: 'Last name is required'},
        maxLength: {value: 10, message: 'Last name must be less than 10 characters'}
    },
    gender:{
        type: String,
        required: {value: true, message:'Gender is required'},
        enum:['M','F','O']
    },
    phone:{
        type: String,
        required: {value: true, message: 'Phone number is required'},
        maxLength: {value: 11, message: 'Phone number must be less than 12 characters'},
        minLength: {value: 11, message: 'Phone number must be greater than 10 characters'},
        validate: {
            validator: function(v) {
                return /\d{11}/.test(v);
                },
            message: props => `${props.value} is not a valid phone number!`

    },
},
    email:{
        type: String,
        required: {value: true, message: 'Email is required'},
        maxLength: {value: 50, message: 'Email must be less than 50 characters'},
        minLength: {value: 10, message: 'Email must be greater than 10 characters'},
        validate: {
            validator: function(v) {
                return /\S+@\S+\.\S+/.test(v);
                },
            message: props => `${props.value} is not a valid email!`
        }
    },
    regDate:{
        type: Date,
        default: Date.now,
        required: {value: true, message: 'Registration date is required'},
    },
    address:{
        type: String,
        required: {value: true, message: 'Address is required'},
        maxLength: {value: 100, message: 'Address must be less than 100 characters'},
        minLength: {value: 10, message: 'Address must be greater than 10 characters'}
    },
    state:{
        type: String,
        default: 'Active',
        enum:['Active','Inactive'],
    },
    userName:{
        type: String,
        required: {value: true, message: 'Username is required'},
        maxLength: {value: 10, message: 'Username must be less than 10 characters'},
        minLength: {value: 5, message: 'Username must be greater than 5 characters'},
        unique: true,
    },
    password:{
        type: String,
        required: {value: true, message: 'Password is required'},
        maxLength: {value: 20, message: 'Password must be less than 20 characters'},
        minLength: {value: 8, message: 'Password must be greater than 8 characters'},
    },
    

},
{
    timestamps: true
})


module.exports = mongoose.model('Passenger', passengerSchema);