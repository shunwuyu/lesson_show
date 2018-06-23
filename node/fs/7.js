const fs = require('fs');

fs.appendFile('./fileForWrite1.txt', 'hello', 'utf8', (err) => {
  if (err) throw err;
  console.log('append成功');
})