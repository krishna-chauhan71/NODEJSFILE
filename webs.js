const http = require('http');
const fs = require('fs');

http.createServer((req,resp) =>{

    if(req.url=='/'){
        fs.readFile("html/index.html","utf-8",(err,data) =>{
        if(err){
            resp.writeHead(500,{"content-type":"text/plain"})
            resp.end("internal server error");
            return false;
    }

        resp.write(data)
        resp.end();
    })
}
else if(req.url=='/style.css'){
      fs.readFile("html/style.css","utf-8",(err,data) =>{
        if(err){
            resp.writeHead(500,{"content-type":"text/plain"})
            resp.end("css not found");
            return false;
    }

    
         resp.writeHead(200,{"content-type":"text/css"})
        resp.end(data);
    })
}
    
}).listen(3200);

