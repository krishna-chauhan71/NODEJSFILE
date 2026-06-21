// const { write } = require('fs');\\
//server 1
const http = require('http');
 http.createServer((req,resp) =>{
    resp.write("<h1>server</h1>");
    resp.end("server 1");
 }).listen(5000);

 //server 2
//  const http = require('http');
 http.createServer((res,resp) =>{
    resp.write(<h2>server</h2>);
    resp.end('server 2');
 }).listen(5001);

 console.log("creation of two server in the same file:")