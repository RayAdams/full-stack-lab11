var fs = require('fs');
var filename = process.argv[2];

fs.readFile(filename, function(err, data) {
    if (err) {
        console.log(err);
    } else {
        file = data.toString();
        console.log(file.split('\n').length - 1);
    }
})