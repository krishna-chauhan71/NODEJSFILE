const http = require('http');

const userData = [
    {
        name:"krishna Chauhan",
        age:21,
        email:"krishnachau518@gmail.com"
    },
    {
        name:"ravi rajbhar",
        age : 22,
        email:"ravi@test.com"
    },
    {
        name:"aditya",
        age:20,
        email:"aditya@test.com"
    }
]
http.createServer((req,resp)=>{

resp.setHeader("Content-Type","application/json");
resp.write(JSON.stringify(userData));
resp.end();
}).listen(6100);

console.log("lets make a simple API");