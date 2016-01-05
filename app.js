
var http = require('http');

var combine = require('./combine');

http.createServer(function(request, response){
    response.writeHead(200);
    response.write(combine.text);
    response.write(combine.randomDollar);
    response.end();
}).listen(3000);

