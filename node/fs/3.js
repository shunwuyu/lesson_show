const fs = require('fs');

const readStream = fs.createReadStream('./fileForRead.txt', 'utf8');

readStream
  .on('data', (chunk) => {
    console.log('读取数据：----------------------------\n' + chunk);
  })
  .on('error', (err) => {
    console.log('出错：' + err.message);
  })
  .on('end', () => {
    console.log('没有数据了');
  })
  .on('close', () => {
    console.log('已经关闭');
  })