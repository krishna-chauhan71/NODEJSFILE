const http = require('http');

http.createServer((req,resp) =>{

resp.writeHead(200,{"content-Type":'text/html'});
console.log(req.url);

    if(req.url=='/'){
         resp.write(`
        <form action="/submit" method="post">
        <input type="text" placeholder="Enter the name" name='name' />
        <br><br> 
          <input type="text" placeholder="Enter your email" name='email' />
          <br><br> 
          <button>Submit</button>
        </form>
        `);
    }
    else if(req.url=='/submit'){
        resp.write('<h1>Data submited</h1>');
    }
   
    resp.end();
}).listen(5500);