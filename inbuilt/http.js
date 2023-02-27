let http = require('http');

// req > what we send to server(params,queryParams,body)
// res > what server send us back

let server = http.createServer(function(req,res){
    res.write('<h1> Hii From Node Server</h1>');
    res.end()
})

server.listen(7600)