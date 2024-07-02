let firstname = "this is a good thing to do"; 
console.log(firstname.indexOf("thing"));
let str = "     this";
console.log(str.indexOf("this"));


// we want to slice from 0th index to 5-1th index
let my_str = "hellokkk";
console.log(my_str.slice(0,4));

//  Replace  string utility 
//  These are just temporary replacements not the actual memory is being accessed and modified
// i think it makes a copy and then replaces it, here is the example -> 
const string_2 = "hello world this is good";
console.log(string_2.replace("world","Universe"));
console.log(string_2.replace("wo","totoro"));

//  this will split and store it in an array 
const str_3  = "hi this is a web dev course";
const words = str_3.split(" ")
console.log(words)

