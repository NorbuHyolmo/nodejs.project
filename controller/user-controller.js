const mongoose = require('mongoose');
const User = mongoose.model('User');

let users = []
exports.getAllUser = async(request,response)=>{
    const users = await User.find();
    response.json(users);
}

exports.store = async(request,response)=>{
    //TO STORE ALL 
    //const user = new User(request.body);

    //TO STORE INDIVIDUALLY
    //const user = new User();
    //user.email = request.body.email;

    //TO STORE SPECIFIC FIELDS
    const {email,password, name, age,phone,address,status} = request.body;
    const user = new User({email,password, name, age,phone,address,status});
    delete user.password;
    await user.save();
    response.status(201).json(request.body);

}

// exports.create = (request,response)=>{
//     users.push(request.body);
//     response.status(201).json(request.body);
// }

// exports.getById = (request,response) =>{
//     let userIndex = users.find(user => user.id === parseInt(request.params.id))
//     if(!userIndex){
//         return response.json({
//             error: 'the given user id was not found'
//         })
//     }
//     response.json(userIndex);
// }