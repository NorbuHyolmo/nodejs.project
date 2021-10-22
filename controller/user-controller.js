let users = []
exports.getAllUser = (request,response)=>{
    response.json(users);
}

exports.create = (request,response)=>{
    users.push(request.body);
    response.status(201).json(request.body);
}

exports.getById = (request,response) =>{
    let userIndex = users.find(user => user.id === parseInt(request.params.id))
    if(!userIndex){
        return response.json({
            error: 'the given user id was not found'
        })
    }
    response.json(userIndex);
}