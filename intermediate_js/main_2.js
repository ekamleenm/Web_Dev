const fs = require("fs");

fs.readFile("a.txt","utf-8",function(err,data){
    console.log(data);
})

// this will run first b/c readFile is a async func and it takes some time to read the file than printing the 
// below func. 
console.log("this is console func");

// if the above funcs takes too long and the callback (here is readFile) comes back it wont be executed 
// until the above func, i.e. until the thread becomes free it will wait. 
