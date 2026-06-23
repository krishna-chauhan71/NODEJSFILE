const http = require('http');
const fs = require('fs');

http.createServer((req,resp) =>{
    fs.readFile('html/form.html','utf-8',(error,data) =>{
        
        if(error){
            resp.writeHead(500,{"content-type":'text/html'});
            resp.write("tnternal server error");
            resp.end();
            return
        }

        resp.writeHead(200,{"content-type":"text/html"});
        if(req.url=='/'){
            resp.write(data);
        }
        else if(req.url=='/submit'){
            resp.write("<h1>DATA IS SUCCESFULLY SUBMITED!</h1>");
        }

        resp.end();
        
    })

}).listen(3200);

console.log("every things is okk no any error");