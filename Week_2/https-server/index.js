const express = require("express");
const port = 3000
const application = express()

application.get('/', function(req,res){
    res.send('hello world');
})

application.post('/backend-api/conversation',function(req,res){
    // Do Computaiton
    res.send('hello world');
})

application.listen(port,function(){
    console.log(`Example app listening on port ${port}`);
})