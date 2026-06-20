// import { userName } from "./data";
const data = require('./data');

console.log(data);


// variable declaration in js

const { log } = require("node:console");

var a=10;
let b=15;
const c=20;

b=100;
a=200;
// c=300; const is value update nhi ho sakt hai
console.log(a+b);

//loop in js

if(a==200){
    console.log("this is if condition");
}
else{
    console.log("this is else condition");
}

//function in js
function fruit(item){
    console.log("this is fruit:"+item);
}
fruit('apple');

//for loop in js
// for(var a=0;a<=10;a++){
//     console.log(a);
// }

//do while loop
var a=0;
while(a<=10){
   
    console.log(a);
     a++;
}

//array
var user=["krish","ravi","aditya","rohit"];
// console.log(user[0]);
for(var a=0;a<user.length;a++){
    console.log(user[a]);
}

//object and there keys
var users={
    name:'krish',
    city:'gkp',
    age:20
}
console.log(users);
console.log(users.name);

