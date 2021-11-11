const mongoose = require('mongoose');
// WE USE bcrypt TO HIDE THE PASSWORD OR ENCRYPT ANY DATA
const bcrypt = require('bcrypt');
const { Schema } = mongoose;

const userSchema = new Schema({
    email: {type : String},
    password: {type : String},
    name: {type: String},
    phone: {type : String},
    age : {type : Number},
    address: {type: String},
    status: {type: Boolean},
    createdAt : {type: Date, default : Date.now},
    updatedAt : {type : Date, default: Date.now}
});
//---------------------------------------------------------------------------------------
// TO CHANGE THE PASSWORD
//- WE USE 'BCRYPT PACKAGE AND USE HASH AND GENSALT FUNCTION
//---------------------------------------------------------------------------------------
//.pre IS A MIDDLEWARE FUNCTION OR ACTS AS ONE
userSchema.pre('save', async function(next){

    //isModified IS A FUNCTION GIVEN BY MONGOOSE
    // IT CAN BE USED TO CHECK WHETHER THE DATA IS MODIFIED OR NOT
    //if statement(this.isModified('which value to check'))
    if(this.isModified('password')){
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
    }

    next()
})
//---------------------------------------------------------------------------------------

// module.exoprts = mongoose.model('model name', Schema name);
module.exports = mongoose.model('User', userSchema);
