const readline = require('readline');

// process 进程 stdin 输入 
// readline 在哪里？
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('please input a word:', function(answer) {
  console.log('Your has entered [%s]', answer.toUpperCase());
  rl.close();
});

