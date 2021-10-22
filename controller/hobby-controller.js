const { response } = require("express");

const hobby = [];  //userId, title

const addHobby = (request,response)=>{
    // const data  = request.body
    // hobby.push(data);
    hobby.push(request.body);
    response.json(request.body);
}

const getAll = (request,response)=>{
    response.json(hobby);
}
module.exports = {
    addHobby,
    getAll
}
