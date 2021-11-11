// validator is used to check the data if it is the valid or not 
const {checkSchema} = require('express-validator');

// validator schema is an object
const userValidator = checkSchema({
    email :{
        //below are the functions of express validator 
        isLength :{
            options :{ min: 1, max :255},
            errorMessage : "Email is required"
        },
        isEmail: {
            errorMessage : "Invalid Email"
        },
    // if there are any spaces in email, trim removes that spaces automatically
    trim: true,
    },

    password :{
        trim : true,
        isLength : {
            options :{ min :6, max : 255},
            errorMessage : "Password must be more than 6 letters"
        }
    },

    name :{
        isLength : {
            options : {min :1 , max: 255},
            errorMessage : "Name is required"
        }
    },
    status: {
        isBoolean : true,
    },

    phone:{
        trim : true,
        isLength :{
            options : {min :10, max : 20},
            errorMessage : "Phone Number is required and must be of 10 characters"
        },
    },

    address : {
        trim : true,
        isLength: {
            options: {min : 1, max : 255},
            errorMessage : "Address is required"
        }
    },

    age:{
        isInt:{
            options: { min: 1, max: 100 },
            errorMessage: "Age is required"
        }
    }
});

module.exports = userValidator;