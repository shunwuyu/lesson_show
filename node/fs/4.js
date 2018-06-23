const fs = require('fs');
fs.writeFile('./FileForWrite.txt', 'hello world', 'utf8', (err) => {
  if (err) throw err
  console.log('文件写入成功');
});