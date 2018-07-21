const readline = require('readline');

const completer = (line) => {
  const command = 'npm';
  const subCommands = ['help', 'init', 'install'];
  // 小于command 时，line 是command 一部份 补全一下
  if (line.length < command.length) {
    return [ command.indexOf(line) === 0 ? [command]: [], line];
  }

  // npm  三个命令都出来， 不熟悉， 建议出来 
  // npm i  install   init  不要help
  // 1. filter 的条件字符串 replace 将npm 干掉
  // 2. commands 命出filter 
  
  let hints = subCommands.filter(subCommand => {
    const lineTrippedCommand =  line.replace(command, '').trim();
    return lineTrippedCommand && subCommand.indexOf(lineTrippedCommand) === 0
  });

  if (hints.length === 1) {
    hints = hints.map(function(hit) {
      return [command, hit].join(' ');
    })
  }

  // 匹配多个？ 或者没有匹配到
  return [hints.length ? hints: subCommands, line];
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  completer: completer
});

rl.prompt();
