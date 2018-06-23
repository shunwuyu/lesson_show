const fs = require('fs');

fs.readFile('./fileForRead.txt', 'utf8', (err, data) => {
  if (err) {
    return console.error('读取文件出错：' + err.message);
  }
  console.log('文件内容：' + data);
})

console.log('文件读取完成');