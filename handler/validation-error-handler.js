// IT CAN BE USED TO CATCH THE ERROR FROM THE VALIDATOR 

const {check, validationResult}= require('express-validator');

// catchValidator is a function that takes a function and checks validation result 
// and if there is any error, it returns error with status code 422 and error payload 
// and in case of no error it returns passed function
const catchValidationError = (fn)=>{    
    return function(request,response,next){
        const errors = validationResult(request);
        if(errors.isEmpty()){
            return fn(request,response,next).catch(next);
        }else{
            // mapped maps all the error that occurs 
            // it is a function of express validator
           let errorData = errors.mapped();
           return response.status(422).json(errorData);
        }
    };
};

module.exports = catchValidationError;