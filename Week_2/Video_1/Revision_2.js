// Promises : 

const fs = require("fs");

function read_write(){
    return new Promise(function(resolve,reject){
        fs.readFile("a1.txt","utf-8",function(err,data) {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

function when_done(data){
    console.log(data);
}
function if_fails(){
    console.log("file not found");
}
read_write().then(when_done).catch(if_fails); 

