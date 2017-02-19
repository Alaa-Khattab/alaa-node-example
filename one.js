var http = require('http');
var fs = require('fs');
var ress = fs.readFileSync(__dirname + '/index.html', 'utf8');
http.createServer(function(req, res) {
    	res.end("HELLO ALAA AT GSG");

    
}).listen(process.evn.PORT, function() {
    console.log('Listening on 8080');
});
