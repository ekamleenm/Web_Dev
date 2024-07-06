function square(n){
    return n*n;
}

function cube(n){
    return n*n*n;
}

function sumofOperator(a,b,operator_function)
{
    return operator_function(a)+operator_function(b);
}

let value = sumofOperator(3,4,cube);
console.log(value);