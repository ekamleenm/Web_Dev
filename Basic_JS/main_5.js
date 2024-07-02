
function calculateArithmetic(a,b,type){
    return type(a,b);
}

function sum(a,b){
    return a+b;
}
function minus(a,b){
    return a-b;
}

// const value = calculateArithmetic(1,2,"add");
// console.log(value);

// const value_2 = calculateArithmetic(7,2,"minus");
// console.log(value_2);

const result = calculateArithmetic(3,5,sum);
console.log(result)

const result_2 = calculateArithmetic(9,5,minus);
console.log(result_2)