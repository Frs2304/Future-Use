const http = require('http');
const port = 3000;
const server = http.createServer((req,res) => {
    res.end('Welcome to my homepage')
})
server.listen(port); 