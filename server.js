//server create karne ke liye code
// const http = require('http');
// http.createServer().listen(5000);



//server me request aur response karne ke liye code
const http = require('http');

http.createServer((req, resp) => {
    resp.write("lets start the backend journy");
    resp.end("Hello World! My name is Krishna Chauhan!");
}).listen(5000);

console.log("Server running on port 5000");