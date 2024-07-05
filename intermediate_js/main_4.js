const { connected } = require("process");

// Syntax 
var d = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve("this is after 1 sec");
    },1000)
    
});
function name_it(){
    console.log("this is good");
    console.log(d);
}

console.log(d);
console.log("this is before 1 sec");
d.then(name_it).catch(function(){
    console.log("this is unresolved");
});