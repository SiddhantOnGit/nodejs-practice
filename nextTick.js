var fs = require("fs");

fs.stat("example.txt",function(err,data){
    console.log("File Exists");
});
setImmediate(function(){
    console.log("Immediate 1 Fired");
});
setImmediate(function(){
    console.log("Immediate 2 Fired");
});
process.nextTick(function(){
    console.log("NextTick 1");
});
process.nextTick(function(){
    console.log("NextTick 2");
});
setTimeout(function(){
    console.log("Timeout fired");
},10);