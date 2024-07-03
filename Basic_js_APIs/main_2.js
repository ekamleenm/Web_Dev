// Some array utitlities 

const initialArray = [1,3,4,5,7];
initialArray.push(56);
console.log(initialArray)
// this pops from the behind of the array
initialArray.pop();

// if you want to pop from front 
initialArray.shift();
console.log(initialArray)

// if i wanna put something in front of the array 
initialArray.unshift(32);
console.log(initialArray);


// Concatination 

const arr_1 = [1,2];
const arr_2 = [6,7,8];
console.log("\n");
console.log(arr_1.concat(arr_2));