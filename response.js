const http = require('http');

const age=21;
const server =http.createServer((req,resp) =>{
resp.setHeader("Content-Type","text/html")
resp.write("<h1>hellow world!</h1>")
resp.write(`
    <html>
    <head>
    <title>response</title>
    </head>
    <body>
    <h1>my name is krishna chauhan</h1>
    <p>lets learn the backend journey by code setp by step</p>
    <h2>`+age+`</h2>
    <h1>`+new Date+`</h1>
    </body>
    </html>
    `)
resp.end();  // to stop the currunt process

// process.exit();  to stop the process

})
server.listen(5000);
console.log("use of response request")