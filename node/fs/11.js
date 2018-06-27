const fs = require('fs');
const path = require('path');
const getFilesInDir = function(dir) {
  var results = [path.resolve(dir)];
  var files = fs.readdirSync(dir, 'utf8');
  // console.log(files);
  files.forEach((file) => {
    file = path.resolve(dir, file);
    // console.log(file);
    const stats = fs.statSync(file);
    
    if (stats.isFile()) {
      results.push(file);
    } else if(stats.isDirectory()) {
      results = results.concat(getFilesInDir(file))
    }
  });
  return results
};

const files = getFilesInDir('./src');
console.log(files);