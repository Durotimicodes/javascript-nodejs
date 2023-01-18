'use strict'

// READ A FILE
var http = require('http')
var fs = require('fs')

http.createServer(function(req, res) {
    fs.readFile('index.html',function(err, data){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data)
        return res.end
    });
    console.log("Starting server on port 8080...")
}).listen(8080);

/*
other methods
fs.appendFile()
fs.open()
fs.readFile()
fs.writeFile()
*/

var fs = require('fs');

//To create a new file
fs.appendFile('myFirstFIle.txt', 'Hello Content', function(err){
    if (err) throw(err); 
    console.log('File Saved')
});


//To Open a file 
fs.open('myFirstFile.txt', 'w', function(err, file){
    if (err) throw(err)
    console.log('File Openned')
});

//To Write into a file
fs.writeFile('myFirstFile.txt', 'This is a new file', function(err) {
    if(err) throw(err) 
    console.log('Write into file')
})

//To Update file 
/*
Make use of the 
fs.appendFile()
fs.writeFile()
*/

//To delete a file use fs.unlink()

// fs.unlink('myFirstFile.txt', function(err) {
//     if (err) throw(err)
//     console.log('Delete file')
// });

//To rename a file 
//fs.rename()
fs.rename('node.html', 'index.html', function(err){
    if (err) throw(err)
    console.log('File renamed')
});