var fs = require('fs');
var filename = process.argv[2];
var fileType = "." + process.argv[3];

fs.readdir(filename, function(err, data) {
    for(var i = 0; i < data.length; i++){
        if (data[i].match(fileType)){
            console.log(data[i]);
        }
    }
});