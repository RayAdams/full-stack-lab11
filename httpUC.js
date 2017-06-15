var http = require('http');

var server = http.createServer(function(req, res){
    if(req.method === 'POST'){
        var incomingData = '';
        req.on('data', function(data){
            incomingData += data;
        })
        req.on('end', function(){
            //here we have received all the POST data, and can continue
            var upper = incomingData.toUpperCase();
            res.writeHead(200, {"Content-Type": "text/plain"});
            res.end(upper);
        })
    }
});

//first arg is your port number, at index 2
server.listen(process.argv[2]);