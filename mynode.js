'use strict'


var http = require('http');
var dt = require('./myfirstmodule');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'}); //if the response from the HTTP server is supposed to be displayed as HTML, USE: HTTP header
    res.write('The data and time are currently:' + dt.myDateTime());// write a presposne to the client
    res.end();// end the response
}).listen(8080);

