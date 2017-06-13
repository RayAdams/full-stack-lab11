var fs = require('fs');
var filename = process.argv[2];

file = fs.readFileSync(filename, 'utf8');
contents = file;
console.log(contents.split('\n').length - 1);