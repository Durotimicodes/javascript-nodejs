'use strict'

var http = require('http');


http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'}); //if the response from the HTTP server is supposed to be displayed as HTML, USE: HTTP header
    res.write(req.url); //response object from the client
    res.end();// end the response
}).listen(8080);