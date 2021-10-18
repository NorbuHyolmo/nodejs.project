# RESTful API 

- set of request methods 
-GET, POST


CRUD OPERATION  
let user = [{
    "id" : 1,
    "name" : "Ram"
},
{
    "id" : 2,
    "name" : "Shyam"
}
]
Routes    |   Request Method   |    Description 
/user            Post                Create a new User
/user            Get                 Get all user info
/user/:id        Put/Patch           Update user info
/user/:id        Get                 Retrieve user info
/user/:id        Delete              Delete using Uid


-PUT/ PATCH 
- ALL INFORMATION CHANGE { USE PUT }
- JUST CHANGE CERTAIN INFORMATION{ USE PATCH }