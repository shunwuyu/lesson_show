var fs = require('fs');
var path = require('path');
const dir = './src';
fs.readdir(dir, (err, files) => {
  files.forEach(file => {
    fs.stat(path.join(dir, file), (err, stat) => {
      console.log(stat);
    })
  })
})

