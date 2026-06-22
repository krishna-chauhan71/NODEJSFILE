const http = require('http');

http.createServer((req, resp) => {
    console.log(req.headers.host);
    if(req.url =="/"){
resp.write("<h1>Home page</h1>");
    }
    else if(req.url =="/login")
        {
resp.write("<h1>login page</h1>");
    }
    else{
        resp.write("<h1>other page</h1>")
    }
    
    resp.end();
}).listen(5000);

console.log("Server running on port 5000");