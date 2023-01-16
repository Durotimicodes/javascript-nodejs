'use strict'

var http = require('http');
var url = require('url')

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'}); //if the response from the HTTP server is supposed to be displayed as HTML, USE: HTTP header
    var q = url.parse(req.url, true).query;
    var txt = q.year + " " + q.month;
    res.end(txt);// end the response
}).listen(8080);