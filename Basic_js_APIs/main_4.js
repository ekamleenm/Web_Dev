function log1(){
    console.log("this is log 1");
}

function log2(){
    console.log("this is log 2");
}
function log3(){
    console.log("this is log 3");
}

function log4(){
    console.log("this is log 4");
}

function callGivenFunc(a_func){
    a_func();
}


callGivenFunc(log1);

callGivenFunc(log4);