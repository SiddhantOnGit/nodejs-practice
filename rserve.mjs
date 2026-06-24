import fs from 'fs';
import http from 'http';

http.createServer(function(req,res){
const myfile = fs.readFileSync("example.txt");
    res.write(myfile);
    res.end();
}).listen(8080);

//mjs for modules