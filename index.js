require('dotenv').config()
// WE NEED A FUNCION TO CALL GET, PATCH, ETC 
// SO, FIRST WE SET EXPRESS FUNCTION IN A STRING APP
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const route = require('./routes');

let users = []; //id, name, email, address

// TO ACCESS THE MIDDLEWARE 
// OR ACCESS THE BODY-PARSER
app.use(bodyParser.json());
//-------------------------------------------------------------------------------
//CRUD
//GET ALL USERS , REQUEST METHOD: GET
app.get('/users',(request, response)=>{
    response.json(users);
})

//-------------------------------------------------------------------------------
//CREATE NEW USER, REQUEST METHOD: POST
app.post('/users',(request,response)=>{
    users.push(request.body);
    response.status(201).json(request.body);
})
//-------------------------------------------------------------------------------
//GET USERS BY ID, REQUEST METHOD: GET
app.get('/users/:id',(req,res)=>{
    //"req.params.id" replaces the value with the id given in the placeholder
    // it also converts the value into string 
    let user = users.find(user=> user.id ===parseInt(req.params.id));
    if(!user) {
       return res.status(404).json({
           error:'The user with the given ID was not found.'
       });
    }else{
        res.json(user);
    }
})
//-------------------------------------------------------------------------------
//UPDATE THE USERS
app.put('/users/:id',(request,response)=>{
    let userIndex = users.findIndex((user)=>user.id ===parseInt(request.params.id));
    // '-1' means there is no available user
    if(userIndex === -1){
        return response.status(404).json({
            error:'The user with the given ID was not found.'
        })
    }
    //ALL UPDATE AT THE SAME TIME
    // users[userIndex] = request.body;
    
    //INDIVIDUAL UPDATE
    //users[index]
    //users[1].name or users[1]['name'] is the same

    users[userIndex]['id'] = request.body.id;
    users[userIndex]['name'] = request.body.name;
    users[userIndex]['email'] = request.body.email;
    users[userIndex]['address'] = request.body.address;
    response.json(request.body);

});
//----------------------------------------------------------------------------
//DELETE THE USERS
app.delete('/users/:id',(request,response)=>{
    let userDelete = users.findIndex((user)=>user.id === parseInt(request.params.id));
    if(userDelete === -1){
        return response.status(404).json({
            error:"The user with the given Id was not found"
        });
    }
    users.splice(userDelete, 1);
    //STATUS CODE 204 MEANS NO CONTENT 
    response.status(204).json({message: "the user has been deleted."});

});
// '||' MEANS EITHER GIVEN PORT OR THE 3000
const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log(`this server is running at port: ${port}`);
});