var fs = require('fs');
var path = require('path');

var readDir  = function(dir) {
  return new Promise((resolve, reject) => {
    fs.readdir(dir, (err, files) => {
      if (err) reject(err);
      resolve(files)
    })
  });
}

var stat = function(path) {
  return new Promise((resolve, reject) => {
    fs.stat(path, (err, stat) => {
      if (err) reject(err)
      resolve(stat)
    })
  })
}

async function findLargest(dir) {
  let files = await readDir(dir);
  let promises = files.map(file => stat(path.join(dir, file)))
  let stats = await Promise.all(promises);

  let largest = stats
    .filter(stat => stat.isFile())
    .reduce((prev, next) => {
      if (prev.size > next.size) return prev
      return next
    })
  
    return files[stats.indexOf(largest)];
}

findLargest('./src')
  .then(filename => {
    console.log(filename);
  })