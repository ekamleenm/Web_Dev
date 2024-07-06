// Promises : to get rid of callbacks 
// Promises syncronously return the promise, it doesn't return result immediately but it doesn't return the promise.
const fs = require("fs");
function ekam_readFile(){
    return new Promise(function(resolve,reject){

        fs.readFile("a1.txt","utf-8",function(err,data) {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    })
}

function when_done(data){
    console.log(data);
}
function if_fails(){
    console.log("file not found");
}
ekam_readFile().then(when_done).catch(if_fails)
