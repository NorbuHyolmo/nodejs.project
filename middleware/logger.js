const logRequest = (request, response, next) =>{
    //'request.method'            -  TO CHECK WHICH METHOD WE ARE USING 
    //'request.protocol'          -  TO CHECK THE PROTOCOL
    //'request.get('host')        -  TO CHECK THE HOST 
    //'request.get('originalUrl') -  TO CHECK THE URL
    console.log('Request Method: ', request.method);
    console.log('Request URL: ', request.originalUrl);
    console.log('Request Time: ', new Date().toLocaleString());
    console.log('Request IP: ', request.ip);
    console.log('Request Headers: ', request.headers);
    console.log('Request Body: ', request.body);
    console.log('Request Host: ', request.hostname);
    // console.log(`${request.method} ${request.protocol}://${request.get('host')} ${request.originalUrl}`);
    next();
}
module.exports = logRequest