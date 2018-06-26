const fs = require('fs');

// fs.mkdir('./hello', function(err) {
//   if (err) {
//     throw err;
//   }
//   console.log('目录创建成功');
// })

function exists(path) {
  return fs.existsSync(path);
}

function isDir(path) {
  return exists(path) && fs.statSync(path).isDirectory();
}

if (!isDir('./hello')) {
  fs.mkdirSync('./hello');
}
