const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer(function(req, res){
    res.writeHead(200, {'content-Type': 'text/plain'});
    res.end('Welcome to node.js!');
});

server.listen(port, hostname, () => {
    console.log('I am just practicing')
});

