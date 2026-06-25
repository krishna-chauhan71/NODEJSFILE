const http = require('http');

const userForm = require('./userForm');  //export the module userForm

const userDataSubmit = require('./userDataSubmit');

http.createServer((req,resp) =>{
     resp.writeHead(200,{"content-type":"text/html"})
     if(req.url=="/"){
    userForm(req,resp)
    }
   else if(req.url=="/submit"){
    resp.write("data submited");
   }
   userDataSubmit(req , resp);
    resp.end();

}).listen(3200);
console.log("every things is okk");