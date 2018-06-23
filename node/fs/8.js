const fs = require('fs');

fs.access('./fileForRead.txt', (err) => {
  if (err) throw err;
  console.log('fileForRead.txt存在');
})