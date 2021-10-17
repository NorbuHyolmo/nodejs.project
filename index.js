const http = require('http');
const { type } = require('os');
const url = require('url');

//THE CALLBACKS ARE REQUEST AND RESPONSE
//FIRST WE CREATED A SERVER USING THE CODE BELOW 
//HTTP.CREATESERVER WHICH INCLUDES REQUEST AND RESPONSE CALLBACKS
const server = http.createServer((request, response) =>{
//     //WE SENT 200 STATUS CODE 
//     //AND CONTENT TYPE AS HTML TEXT
//     response.writeHead(200, {'content-type': 'text/html'});
//     //RESPONSE.WRITE == BODY
//     response.write('<h1> Hello IIMS and nodemon running  </h1>'); 
//     //RESPONSE.END MEANS END AND EXECUTE THE RESPONSES
//     response.end();
// })
let content =  "";
let statusCode = 200;
switch(request.url){
    case "/":
        content = "<h1> This is the root page </h1>"
    break;
    case "/profile":
        content = "<h1> This is the profile page </h1>"
    break;
    case "/about":
        content = "<h1> This is the about page </h1>"
    break;

    default:
        content = "<h1> This is the 404 page </h1>"
        statusCode = 404;
    break;
}

response.writeHead(statusCode,{'Content-type':'text/html'});
response.write(
    content
    );
response.end();;
});

//NEED TO PROVIDE A LOCAL HOST TO RUN THE RESPONSE
//3000 IS THE LOCAL HOST
//CAN WRITE ANY LOCAL HOST CODE
// server.listen(1000);  OR
const port = 3000;
server.listen(port,()=>{
//USE ` TO SHOW ANY STRING DYANAMICALLY 
//AND USE ${STRING} TO SHOW ANY STRING DYNAMICALLY
    console.log(`Server is running at port: ${port}`);
});
