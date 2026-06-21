 //js jo pahale se hi avilable hote hai isko crete nhi karna padata 
 const fs = require('fs'); 
 const os = require('os');

import { platform } from "node:os";

fs.writeFileSync("dummy.txt","its krishna chuahan");
console.log(os.platform());
console.log(os.hostname());
console.log(os.cpus());


//global object jisko imort nhi karna padata hai by default avilable in all modules
console.log('abc');
console.log(process.cwd()); //process ka path check karne ke liye use hota hai
console.log(process.pid);   //process ka process id check karne ke liye hota hai

//forcefully import global object
const {log,warn} = require('console');
log("custom log");
warn("custom log");
