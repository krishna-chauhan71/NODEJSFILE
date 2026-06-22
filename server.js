//server create karne ke liye code
// const http = require('http');
// http.createServer().listen(5000);



//server me request aur response karne ke liye code
const http = require('http');

http.createServer((req, resp) => {
    resp.write("lets start the backend journy");
    resp.write("<h2>nodemon</h2>");
    resp.end("Hello World! My name is Krishna Chauhan! lets start with node.js");
}).listen(5000);

console.log("Server running on port 5000");