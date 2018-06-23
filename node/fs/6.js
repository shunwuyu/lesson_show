var fs = require('fs');
var writeStream = fs.createWriteStream('./fileForWrite1.txt', 'utf8');
writeStream
  .on('close', () => {
    console.log('已经关闭');
  });

writeStream.write('me');
writeStream.write('to');
writeStream.end('');