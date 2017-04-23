var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
	res.writeHead(200, {'Content-Type': 'text/html'});
	var readHtml = fs.createReadStream(__dirname + '/index.html', 'utf8');
	readHtml.pipe(res);
});

server.listen(3000, '127.0.0.1');
console.log('listening on port 3000');