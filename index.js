const http = require('http');

const fs = require('fs');

const server = http.createServer((req, res) =>{

    const data = fs.readFileSync('index.html').toString();

    res.end(data);

});

server.listen(8080);

console.log('The server to listen on port 8080');