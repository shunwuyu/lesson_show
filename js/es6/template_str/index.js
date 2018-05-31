// 正则匹配
// 嵌套

// let message = `Hello World`;
// let message = `Hello \` World`;
// 空格、缩进、换行都会被保留 trim
// let message = `
//   <ul>
//     <li>1</li>
//     <li>2</li>
//   </ul>
// `.trim();

// let x = 1, y = 2;
// let message = `<ul><li>${x}</li><li>${x+y}</li></ul>`
// 嵌套
// let arr = [{value: 1}, {value: 2}];
// // 不是字符串时， 会将其转为字符串，
// let message = `
//   <ul>
//     ${arr.map((item) => {
//       return `
//         <li>${item.value}</li>
//       `
//     }).join('')}
//   </ul>
// `

// 标签模板 模板字符串可以紧跟在一个函数名后面， 该函数被调用来处理这个模板字twfykkh，
// function message(literals, value1, value2) {
//   console.log(literals);
//   console.log(value1);
//   console.log(value2);
// }
// function message(literals, ...values) {
//   let result = '';
//   for (let i = 0; i < values.length; i++) {
//     result += literals[i];
//     result += values[i];
//   }
//   result += literals[literals.length - 1];
//   // result += 'xxx';
//   return result;
// }

// var arr = [1,3,4,7,9];
// let sum = arr.reduce(function(x, y) {
//   return x + y;
// });
// console.log(sum);

// function message(literals, ...values) {
//   let result = literals.reduce((prev, next, i) => {
//     // console.log(i);
//     let value = values[i-1];
//     return prev + value + next
//   });
//   return result;
// }

// let x = 'Hi', y = 'Kevin';
// var res = message`${x}, I am ${y}`;
// console.log(res);

// function oneline(template, ...expressions) {
//   let result = template.reduce((prev, next, i) => {
//     let expression = expressions[i];
//     return prev + expression + next;
//   });
//   result = result.replace(/(\n\s+)/g," ");
//   result = result.trim();
//   return result;
// }

// let message = oneline`
//   Hi,
//   Daisy!
//   I am
//   Kevin.
// `
// console.log(message);

// let html = `
//   <span>1</span>
//   <span>2</span>
//     <span>3</span>
// `

// function stripIndents(template, ...expressions) {
//   let result = template.reduce((prev, next, i) => {
//     let expression = expressions[i-1];
//     return prev + expression + next;
//   });
//   // ^ 表示取非\S 非空白字符 
//   // /^[^\S\n]+/gm
//   result = result.replace(/\n[^\S\n]*/g, '\n');
//   result = result.trim();
//   return result;
// }


// let html = `
// 	<ul>
// 		<li>1</li>
// 		<li>2</li>
// 		<li>3</li>
// 	<ul>
// `;

// function stripIndents(template, ...expression) {
//   let result = template.reduce((prev, next, i) => {
//     let expression = expressions[i - 1];
//         return prev + expression + next;      
//   });
//   const match = result.match(/^[^\S\n]*(?=\S)/gm);
//   console.log(match);
//   const indent = match && Math.min(...match.map(el => el.length));
//   if (indent) {
//     const regexp = new RegExp(`^.{${indent}}`, 'gm');
//     console.log(regexp); // /^.{4}/gm

//     result =  result.replace(regexp, '');
//   }
//   result = result.trim();
//   return result;
// }
// var res = stripIndents`
// <ul>
//       <li>1</li>
//   <li>2</li>
//         <li>3</li>
// <ul>
// `
// console.log(res)

let arr = [{value: 1}, {value: 2}];

function includeArrays(template, ...expressions) {
  let result = template.reduce((prev, next, i) => {

      let expression = expressions[i - 1];

      if (Array.isArray(expression)) {
          expression = expression.join('');
      }

      return prev + expression + next;
  });

  result = result.trim();

  return result;
}

const result = includeArrays`
<ul>
  ${arr.map((item) => {
    return `
      <li>${item.value}</li>
    `
  })}
</ul>
`
console.log(result)