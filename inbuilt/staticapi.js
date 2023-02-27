let http = require('http');
let fs = require('fs');

let server = http.createServer(function(req,res){
    //read file with fs
    fs.readFile('location.json','utf-8',function(err,data){
        if(err) throw err;
        //return the data from file
        res.write(data);
        res.end();
    })
})

server.listen(1234)
