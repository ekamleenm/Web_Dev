// iterating over a loop 
const array_1 = [1,2,3,5,5,7,8,6];
function logThings(str){
    console.log(str);
}
// array_1.forEach(pass a function here)

array_1.forEach(logThings);

// forEach Method Overview
// The forEach method is an array method that executes a provided function once for each array 
// element. It does not return a new array, but simply executes the function on each element.