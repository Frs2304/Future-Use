const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer((req,res) => {
    if(req.url === '/'){
        res.end('Home Page');
    }
    if(req.url === '/about'){
        res.end('About Page');
    }
})

server.listen(3000, () => {
    console.log("Server is listening on port 3000...")
})