var numbers = [65, 44, 12, 4];
var total = numbers.reduce((prev, next) => {
  return prev + next;
})

console.log(total);