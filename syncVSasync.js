// console.log("apple1");

// //Async.. function
// setTimeout(() =>{
//     console.log("apple 2");
    
// } ,2000);
// console.log("apple 3");


// ye bhi ek Async function hai
// const fs = require('fs');

// fs.readFile("text/krishna chauhan.txt","utf-8",(error,data) =>{
//     if(error){
//         return false;
//     }
//     console.log(data);
// });
// console.log("end script");  //pahale ye print hoga tab Async ka function


/* upar jo fs file run kara rahe hai wo Async hai kro kii late output aa raha hai to
 us ko block bhi kar sakte hai hai kii pahale async ka function run ho tab sync */

 const fs = require('fs');
 const data = fs.readFileSync("text/krishna chauhan.txt","utf-8");
 console.log(data);

 console.log("end script");
 
 


