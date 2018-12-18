var fs = require('fs');
var path = require('path');

function findLargest(dir, cb) {
  fs.readdir(dir, (err, files) => {
    if (err) return cb(err);

    var counter = files.length;
    var errored = false;
    var stats = [];
    files.forEach((file, index) => {
      fs.stat(path.join(dir, file), (err, stat) => {
        if (errored) return;
        if (err) {
          errored = true;
          return cb(err);
        }
        stats[index] = stat;
        if (--counter == 0) {
          var largest = stats
            .filter((stat) => stat.isFile())
            .reduce((prev, next) => {
              if (prev.size > next.size) return prev
              return next
            })
          cb(null, files[stats.indexOf(largest)])
        }
      })
    })
  });
}

findLargest('./src', (err, filename) => {
  if (err) return console.error(err)
  console.log('largest file was:', filename, );
});