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

//CRUD
//GET ALL USERS , REQUEST METHOD: GET
app.get('/users',(request, response)=>{
    response.json(users);
})

//CREATE NEW USER, REQUEST METHOD: POST
app.post('/users',(request,response)=>{
    users.push(request.body);
    response.status(201).json(request.body);
})

//GET USERS BY ID, REQUEST METHOD: GET
app.get('/users/:id',(req,res)=>{
    //"req.params.id" replaces the value with the id given in the placeholder
    // it also converts the value into string 
    let user = users.find(user=> user.id ===parseInt(req.params.id));
    if(!user)res.status(404).send('The user with the given ID was not found.');
    res.json(user);
})

// '||' MEANS EITHER GIVEN PORT OR THE 3000
const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log(`this server is running at port: ${port}`);
});