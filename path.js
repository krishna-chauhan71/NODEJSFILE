const { log } = require('console');
const path = require('path');
const file = "text/krishna chauhan.txt";

//to check the extention of file
console.log(path.extname(file));

//to check the directary name of file
console.log(path.dirname(file));

// to check the file name 
console.log(path.basename(file));

//to check the root of foder and file 
console.log(path.resolve("text","krishna chauhan.txt"));

// __dirname and __filename is global object

//also to check the name of directory
console.log(__dirname);

//also to check the name of file
console.log(__filename);






