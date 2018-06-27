const fs = require('fs');

fs.rename('./hello', './world', (err) => {
  if (err) throw err;
  console.log('重命名成功');
});