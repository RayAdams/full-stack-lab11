var net = require('net');
var port = process.argv[2];

var d = new Date();
var year = d.getFullYear();
var month = d.getMonth() + 1;
var day = d.getDate();
var hour = d.getHours();
var min = d.getMinutes();

//make double digits
var dbl = function(num){
	if(num < 10){
			return String('0' + num);
	} else {
		return String(num);
	}
}

var data = year + "-" + dbl(month) + "-" + dbl(day) + " " + dbl(hour) + ":" + dbl(min);

var server = net.createServer( function(socket) {
    socket.write(data);
    socket.end("\n");
});

server.listen(port);