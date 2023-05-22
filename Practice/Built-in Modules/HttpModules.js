const http = require('http');
const port = 3000;
// Returns a new instance of Server.
const server = http.createServer((req,res) => {
    res.end('Welcome to my homepage')
})
server.listen(port); 