const express = require('express');
const app = express();

app.get("/", function(request,response){
    response.send("<h1>Hello World</h1>");
})
//OR
app.get("/about",(request, response)=>{
    response.send("This is the about page");
});

app.get("/profile", function(request,response){
    //IF WE WANT TO ADD CUSTOMIZED STATUS CODE
    response.status(200).json({
        "Name" : "Norbu Lama",
        "Location" : "Kathmandu"
    }); 
})
app.listen(3000);