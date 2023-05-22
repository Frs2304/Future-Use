const http = require('http');
const port = 3000;
// Returns a new instance of Server.
const server = http.createServer((req,res) => {
    if(req.url === '/'){
        res.end('Welcome to my Homepage')
    }
    if(req.url === '/about'){
    res.end('Welcome to the About page')
    }
})
// Start a server listening for connections.
server.listen(port); 