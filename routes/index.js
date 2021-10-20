const { application } = require('express');
const express=  require('express');
const router = express.Router();

router.get('/users',(request, response)=>{
    response.json(users);
})

//CREATE NEW USER, REQUEST METHOD: POST
router.post('/users',(request,response)=>{
    users.push(request.body);
    response.status(201).json(request.body);
})

module.exports = router