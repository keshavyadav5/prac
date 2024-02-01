

// -------------- Filter function 
// it's only work on array

// const array = [3, 5, 6, 2, 3, 4, 1, 7, 8, 9];
// let sum = 0
// const result = array.filter((item) => {
//   sum += item
//   return item
// })

// console.log(result);
// console.log(sum)


//console.log(__filename);                 // to print current file name 
//console.warn(__dirname);                 // to print current dir name


// .............................  CREATE SERVER ............................

// const http = require('http');

// const dataControl = (req,resp) =>{
//   resp.write("<h1>Pal Pal Tarpa Jis Pal K liye O Pal V Aaaya Kuch Pal K liye</h1>");
//   resp.end();
// }

// http.createServer(dataControl).listen(4500);



//.............................. password checking 
console.log("kello");
console.log("hello world");
const prompt=require("prompt-sync")();
let cn=43;
let a
while(a!=cn){
    a=prompt("enter a number")
}
console.log("you have entered correct number")