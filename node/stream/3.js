const fs = require('fs');
const zlib = require('zlib');
const gzip = zlib.createGzip();

var inFile = fs.createReadStream('./sample.txt');
var out = fs.createWriteStream('./sample.txt.gz');
inFile.pipe(gzip).pipe(out);