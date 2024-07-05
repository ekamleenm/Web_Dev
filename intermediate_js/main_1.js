function findSum(n){
    let ans = 0;
    for(let i = 0; i<n;i++){
        ans += i;
    }
    return ans;
}

function findSumTill100(){
    console.log(findSum(100));
}

// this is async function ; we call it and move on. 
setTimeout(findSumTill100,1000);

console.log("hello world");


/*  Notes 
    Description: setTimeout is an asynchronous function that schedules findSumTill100 to be called after 1000 milliseconds (1 second). This means the code inside setTimeout will not block the execution of subsequent code.
    Execution:
    setTimeout is called, scheduling findSumTill100 to run after 1 second.
    Immediately after scheduling, the code execution continues, and console.log("hello world") runs.
    After 1 second, findSumTill100 is executed. 
    setTimeout is called, and it's recognized as a Web API function.
    The delay and the callback function (findSumTill100) are passed to the Web API to handle.

*/