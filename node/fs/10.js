const fs = require('fs');
fs.unlink('./fileForRead.txt', function(err) {
  if (err) throw err;
  console.log('文件删除成功');
});