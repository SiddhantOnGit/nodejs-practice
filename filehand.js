var fs = require("fs");

fs.readFile("example.txt", function (err, data) {
    if (err) console.log(err);
    else {
        console.log(data); //Buffer Object
        console.log(data.toString());
    }
});
setTimeout(function(){
    fs.stat("example.txt",(err,stats)=>{
    console.log(stats);
    });
},100);
//var content = "New content that I added";
//fs.writeFile("example.txt",content, function(err){
//    if (err) console.log(err);
//    else{
//        console.log("Check the file bro.");
//    }
//});
