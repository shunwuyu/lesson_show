var fs = require('fs');
var zlib = require('zlib');

var gzip = zlib.createGzip();
var inFile = fs.createReadStream('./a.txt');
var out = fs.createWriteStream('./a.txt.gz');
inFile.pipe(gzip).pipe(out);