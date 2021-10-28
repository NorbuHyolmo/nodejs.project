require('dotenv').config()
require('./config/database')
// WE NEED A FUNCION TO CALL GET, PATCH, ETC 
// SO, FIRST WE SET EXPRESS FUNCTION IN A STRING APP
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const logMiddleware = require('./middleware/logger');

//CALLING THE INDEX OF JS FROM THE PATH ROUTES
const route = require('./routes');

//------MIDDLEWARE---------
// 'use' TO ACCESS THE MIDDLEWARE 
// MIDDLEWARE IS USED TO INTERCEPT BETWEEN RES AND REQ
// 'next' IS USED TO PASS FROM ONE TO NEXT MIDDLEWARE 

app.use(bodyParser.json());

app.use(logMiddleware);

app.use('/', route);


// '||' MEANS EITHER GIVEN PORT OR THE 3000
const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log(`this server is running at port: ${port}`);
});