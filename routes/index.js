const { application } = require('express');
const express =  require('express');
//express function provides Router
const router = express.Router();
// require({controller location}/ controller file name)
const userController = require('../controller/user-controller');
//YOU CAN ALSO DIRECTLY ASSIGN THE FUNCTION IN THE CONST 
// SO YOU CAN CALL IT DIRECLY IN THE ROUTE 
const {addHobby, getAll} =require('../controller/hobby-controller');

const userValidator = require('../validator/user-validator');
const catchValidationError = require('../handler/validation-error-handler')

let users = []; //id, name, email, address

//-------------------------------------------------------------------------------
//BELOW ARE THE ROUTES
//CRUD
//GET ALL USERS , REQUEST METHOD: GET
router.get('/users', userController.getAllUser);

//-------------------------------------------------------------------------------
//CREATE NEW USER, REQUEST METHOD: POST
router.post('/users',userValidator, catchValidationError(userController.store));

// //-------------------------------------------------------------------------------
// //GET USERS BY ID, REQUEST METHOD: GET
// router.get('/users/:id',(request,response)=>{
//     //"req.params.id" replaces the value with the id given in the placeholder
//     // it also converts the value into string 
//     let user = users.find(user=> user.id ===parseInt(request.params.id));
//     if(!user) {
//        return response.status(404).json({
//            error:'The user with the given ID was not found.'
//        });
//     }else{
//         response
//         .json(user);
//     }
// })
// //-------------------------------------------------------------------------------
// //UPDATE THE USERS
// router.put('/users/:id',(request,response)=>{
//     let userIndex = users.findIndex((user)=>user.id ===parseInt(request.params.id));
//     // '-1' means there is no available user
//     if(userIndex === -1){
//         return response.status(404).json({
//             error:'The user with the given ID was not found.'
//         })
//     }
//     //ALL UPDATE AT THE SAME TIME
//     // users[userIndex] = request.body;
    
//     //INDIVIDUAL UPDATE
//     //users[index]
//     //users[1].name or users[1]['name'] is the same

//     users[userIndex]['id'] = request.body.id;
//     users[userIndex]['name'] = request.body.name;
//     users[userIndex]['email'] = request.body.email;
//     users[userIndex]['address'] = request.body.address;
//     response.json(request.body);

// });
// //----------------------------------------------------------------------------
// //DELETE THE USERS
// router.delete('/users/:id',(request,response)=>{
//     let userDelete = users.findIndex((user)=>user.id === parseInt(request.params.id));
//     if(userDelete === -1){
//         return response.status(404).json({
//             error:"The user with the given Id was not found"
//         });
//     }
//     users.splice(userDelete, 1);
//     //STATUS CODE 204 MEANS NO CONTENT 
//     response.status(204).json({message: "the user has been deleted."});

// });

module.exports = router;
//-----OR--------
//CAN DO INDIVIDUALLY
// const getById = (req,res)=>{......}
// MODULE.EXPORTS = {
//  getById
// }