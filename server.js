const http = require("http");

const port = 8080;

http
.createServer((req, res)=>{
    res.writeHead(200, {"Context-Type": "text/html"})
    res.write("<h1>hello this is my first server </h1>")
    res.end();
})

.listen(port, ()=>{
    console.log(`NodeJs Server is Up and running on port ${port}`)
})

// http status code
// https://localhost:8080