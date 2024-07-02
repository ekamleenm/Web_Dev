// Functions 

function findsum(a,b){
    console.dir(a)
    return a+b;
}

let a = 3;
let b = 4;

console.dir(a)
const value = findsum(a,b)
console.log(value)


// Functions can take other functions 
function sum(a,b,functocall){
    let result = a+b;
    // calling the other func
    // by passing in result
    functocall(result)
}

function display(data){
    console.log("the sum is " + data);
}
function display_2(data){
    console.log("this is second display call " + data );
}

sum(2,4,display_2)
sum(4,5,display)